import * as Contract from "./contract.document";
import * as cnst from "../cnst";
import * as doc from "../doc";
import { AddrLoadService, Id } from "@util/server";
import {
  Erc1155,
  Erc1155TrasferBatchEventHandler,
  Erc1155TrasferSingleEventHandler,
  Erc20,
  Erc20TrasferEventHandler,
  Erc721,
  Erc721TrasferEventHandler,
} from "@contract";
import { InjectModel } from "@nestjs/mongoose";
import { Injectable, OnModuleDestroy } from "@nestjs/common";
import { NetworkEmployee } from "../network/network.employee";
import { OwnershipEmployee } from "../ownership/ownership.employee";
import { TokenEmployee } from "../token/token.employee";
import { WalletEmployee } from "../wallet/wallet.employee";
@Injectable()
export class ContractEmployee
  extends AddrLoadService<Contract.Mdl, Contract.Doc, Contract.Input>
  implements OnModuleDestroy
{
  destroyers: (() => Promise<void> | void)[] = [];
  constructor(
    @InjectModel(Contract.name)
    private readonly Contract: Contract.Mdl,
    private readonly networkEmployee: NetworkEmployee,
    private readonly tokenEmployee: TokenEmployee,
    private readonly walletEmployee: WalletEmployee,
    private readonly ownershipEmployee: OwnershipEmployee
  ) {
    super(ContractEmployee.name, Contract);
  }
  async listenAllContracts() {
    const contracts = await this.Contract.find({ status: "active" });
    return await Promise.all(contracts.map(async (contract) => await this.#listenContract(contract)));
  }
  async inventory(wallet: doc.Wallet.Doc) {
    const contracts = await this.Contract.find({
      status: "active",
      network: wallet.network,
    });
    const ownershipInputs = [
      ...(await this.#inventoryErc20(
        wallet,
        contracts.filter((c) => c.is("erc20"))
      )),
      ...(await this.#inventoryErc721(
        wallet,
        contracts.filter((c) => c.is("erc721"))
      )),
      ...(await this.#inventoryErc1155(
        wallet,
        contracts.filter((c) => c.is("erc1155"))
      )),
    ];
    return await this.ownershipEmployee.setTokens(ownershipInputs);
  }
  async #inventoryErc20(wallet: doc.Wallet.Doc, contracts: Contract.Doc[]): Promise<doc.Ownership.TokenInput[]> {
    if (!contracts.length) return [];
    const instance = (await this.networkEmployee.loadContract(contracts[0])) as Erc20;
    const tokens = (await this.tokenEmployee.ctrLoadMany(contracts.map((c) => c._id))).map((t) => t[0]);
    const items = await instance.inventory(
      wallet.address,
      contracts.map((c) => c.address)
    );
    return items.map((item, idx) => ({
      wallet: wallet._id,
      token: tokens[idx],
      value: item.value,
    }));
  }
  async #inventoryErc721(wallet: doc.Wallet.Doc, contracts: Contract.Doc[]): Promise<doc.Ownership.TokenInput[]> {
    if (!contracts.length) return [];
    const instance = (await this.networkEmployee.loadContract(contracts[0])) as Erc721;
    const [contractMap, tokenMap] = [new Map(), new Map()];
    contracts.map((contract) => contractMap.set(contract.address, contract));
    const tokenLists = await this.tokenEmployee.ctrLoadMany(contracts.map((c) => c._id));
    tokenLists.map((tokens, idx) =>
      tokens.map((token) => tokenMap.set(`${contracts[idx].address}-${token.tokenId}`, token))
    );
    const items = await instance.inventory(
      wallet.address,
      contracts.map((c) => c.address)
    );
    return await Promise.all(
      items.map(async (item, idx) => {
        const contract = contractMap.get(item.contract);
        const token =
          tokenMap.get(`${item.contract}-${item.tokenId}`) ??
          (await this.tokenEmployee.generate(contract, item.tokenId, item.uri));
        return { wallet: wallet._id, token, value: 1 };
      })
    );
  }
  async #inventoryErc1155(wallet: doc.Wallet.Doc, contracts: Contract.Doc[]): Promise<doc.Ownership.TokenInput[]> {
    if (!contracts.length) return [];
    const instance = (await this.networkEmployee.loadContract(contracts[0])) as Erc1155;
    const tokens = await this.tokenEmployee.ctrLoadMany(contracts.map((c) => c._id));
    const contractMap = contracts.reduce(
      (acc, contract, idx) => [
        ...acc,
        ...tokens[idx].map((token) => ({
          address: contract.address,
          id: token.tokenId as number,
          cId: contract._id,
          token,
        })),
      ],
      []
    );
    const items = await instance.inventory(wallet.address, contractMap);
    return items.map((item, idx) => ({
      wallet: wallet._id,
      token: contractMap[idx].token,
      value: item.value,
    }));
  }
  async snapshot(contractId: Id, walletIds: Id[] = []) {
    const contract = await this.Contract.pickById(contractId);
    const instance = await this.networkEmployee.loadContract(contract);
    const wallets = contract.is("erc721")
      ? []
      : walletIds.length
      ? await this.walletEmployee.loadMany(walletIds)
      : await this.walletEmployee.list({ network: contract.network });
    const inputs = contract.is("erc20")
      ? await this.#snapshotErc20(contract, instance as Erc20, wallets)
      : contract.is("erc721")
      ? await this.#snapshotErc721(contract, instance as Erc721)
      : contract.is("erc1155")
      ? await this.#snapshotErc1155(contract, instance as Erc1155, wallets)
      : [];
    return await this.ownershipEmployee.setOwnershipsByContract(contractId, inputs);
  }
  async #snapshotErc20(
    contract: Contract.Doc,
    instance: Erc20,
    wallets: doc.Wallet.Doc[]
  ): Promise<doc.Ownership.TokenInput[]> {
    const list = await (instance as Erc20).snapshot(wallets.map((w) => w.address));
    const token = await this.tokenEmployee.generate(contract);
    return list.map((l, idx) => ({
      wallet: wallets[idx]._id,
      token,
      value: l.value,
    }));
  }
  async #snapshotErc721(contract: Contract.Doc, instance: Erc721): Promise<doc.Ownership.TokenInput[]> {
    const list = await (instance as Erc721).snapshot();
    const wallets = await this.walletEmployee.generateWallets(
      contract.network,
      list.map((l) => l.address)
    );
    const tokens = await this.tokenEmployee.list({ contract: contract._id });
    const [tokenMap, walletMap] = [new Map(), new Map()];
    wallets.map((wallet) => walletMap.set(wallet.address, wallet));
    tokens.map((token) => tokenMap.set(token.tokenId, token));
    (
      await this.tokenEmployee.generates(
        contract,
        list.filter((l) => !tokenMap.get(l.tokenId))
      )
    ).map((token) => tokenMap.set(token.tokenId, token));
    return list.map((l) => ({
      wallet: walletMap.get(l.address)._id as Id,
      token: tokenMap.get(l.tokenId)._id,
      value: 1,
    }));
  }
  async #snapshotErc1155(
    contract: Contract.Doc,
    instance: Erc1155,
    wallets: doc.Wallet.Doc[]
  ): Promise<doc.Ownership.TokenInput[]> {
    const tokens = await this.tokenEmployee.list({ contract: contract._id });
    if (!tokens.length) return [];
    const tokenMap = new Map();
    tokens.map((token) => tokenMap.set(token.tokenId, token));
    const list = await (instance as Erc1155).snapshot(
      wallets.map((w) => w.address),
      tokens.map((t) => t.tokenId as number)
    );
    return list.map((l, idx) => ({
      wallet: wallets[idx]._id,
      token: tokenMap.get(l.tokenId),
      value: l.value,
    }));
  }
  async #listenContract(contract: Contract.Doc) {
    const instance = await this.networkEmployee.loadContract(contract);
    if (contract.is("erc20")) {
      const token = await this.tokenEmployee.pick({ contract: contract._id });
      (instance as Erc20).listen({
        onTransfer: this.#onErc20Transfer(contract, token, instance as Erc20),
      });
    } else if (contract.is("erc721"))
      (instance as Erc721).listen({
        onTransfer: this.#onErc721Transfer(contract, instance as Erc721),
      });
    else if (contract.is("erc1155"))
      (instance as Erc1155).listen({
        onTransferSingle: this.#onErc1155TransferSingle(contract, instance as Erc1155),
        onTransferBatch: this.#onErc1155TransferBatch(contract, instance as Erc1155),
      });
    const destroyer = () => instance.destroy();
    this.destroyers.push(destroyer);
    return destroyer;
  }
  #onErc20Transfer(contract: Contract.Doc, token: doc.Token.Doc, instance: Erc20): Erc20TrasferEventHandler {
    return async (from, to, value, e) => {
      const bn = e.blockNumber;
      if (bn < contract.bn) return;
      this.logger.log(`ERC20 Transfer Detected from ${from} to ${to} value: ${value.toString()} bn: ${bn}`);
      const f = await this.walletEmployee.myWallet(contract.network, from);
      const t = await this.walletEmployee.myWallet(contract.network, to);
      await this.ownershipEmployee.transferToken(token, f._id, t._id, parseInt(value.toString()), bn);
    };
  }
  #onErc721Transfer(contract: Contract.Doc, instance: Erc721): Erc721TrasferEventHandler {
    return async (from, to, id, e) => {
      const [bn, tokenId] = [e.blockNumber, parseInt(id.toString())];
      if (bn < contract.bn) return;
      this.logger.log(`ERC721 Transfer Detected from ${from} to ${to} id: ${id.toString()} bn: ${bn}`);
      const f = await this.walletEmployee.myWallet(contract.network, from);
      const t = await this.walletEmployee.myWallet(contract.network, to);
      const uri = (await this.tokenEmployee.exists({
        contract: contract._id,
        tokenId,
      }))
        ? undefined
        : await instance.contract.tokenURI(tokenId);
      const token = await this.tokenEmployee.generate(contract, tokenId, uri);
      await this.ownershipEmployee.transferToken(token, f._id, t._id, 1, bn);
    };
  }
  #onErc1155TransferSingle(contract: Contract.Doc, instance: Erc1155): Erc1155TrasferSingleEventHandler {
    return async (operator, from, to, id, value, e) => {
      const [bn, tokenId] = [e.blockNumber, parseInt(id.toString())];
      if (bn < contract.bn) return;
      this.logger.log(
        `ERC1155 Transfer Detected from ${from} to ${to} id: ${id.toString()} value: ${value.toString()} bn: ${bn}`
      );
      const f = await this.walletEmployee.myWallet(contract.network, from);
      const t = await this.walletEmployee.myWallet(contract.network, to);
      const uri = (await this.tokenEmployee.exists({
        contract: contract._id,
        tokenId,
      }))
        ? undefined
        : await instance.contract.uri(tokenId);
      const token = await this.tokenEmployee.generate(contract, tokenId, uri);
      await this.ownershipEmployee.transferToken(token, f._id, t._id, parseInt(value.toString()), bn);
    };
  }
  #onErc1155TransferBatch(contract: Contract.Doc, instance: Erc1155): Erc1155TrasferBatchEventHandler {
    return async (operator, from, to, ids, values, e) => {
      const bn = e.blockNumber;
      if (bn < contract.bn) return;
      const f = await this.walletEmployee.myWallet(contract.network, from);
      const t = await this.walletEmployee.myWallet(contract.network, to);
      const list = ids.map((id, idx) => ({
        tokenId: parseInt(id.toString()),
        num: parseInt(values[idx].toString()),
      }));
      for (const { tokenId, num } of list) {
        const uri = (await this.tokenEmployee.exists({
          contract: contract._id,
          tokenId,
        }))
          ? undefined
          : await instance.contract.uri(tokenId);
        const token = await this.tokenEmployee.generate(contract, tokenId, uri);
        await this.ownershipEmployee.transferToken(token, f._id, t._id, num, bn);
      }
    };
  }
  async transfer(tokenId: Id, fromWalletId: Id | "root", toWalletId: Id, amount: number) {
    const token = await this.tokenEmployee.get(tokenId);
    const contract = await this.Contract.pickById(token.contract);
    const instance = await this.networkEmployee.loadContract(contract);
    const [fromWallet, toWallet] =
      fromWalletId === "root"
        ? [
            await this.walletEmployee.pick({
              network: contract.network,
              type: "root",
            }),
            await this.walletEmployee.get(toWalletId),
          ]
        : await this.walletEmployee.loadMany([fromWalletId, toWalletId]);
    if (contract.interface === "erc20") {
      await (instance as Erc20).transfer(fromWallet.address, toWallet.address, amount);
    } else if (contract.interface === "erc721") {
      await (instance as Erc721).transfer(fromWallet.address, toWallet.address, token.tokenId as number);
    } else if (contract.interface === "erc1155") {
      await (instance as Erc1155).transfer(fromWallet.address, toWallet.address, token.tokenId as number, amount);
    } else throw new Error("Unsupported Interface");
  }
  async checkApproval(tokenId: Id, walletId: Id | "root", amount: number) {
    const token = await this.tokenEmployee.get(tokenId);
    const contract = await this.Contract.pickById(token.contract);
    const instance = await this.networkEmployee.loadContract(contract);
    // console.log(instance);
    const wallet =
      walletId === "root"
        ? await this.walletEmployee.pick({
            network: contract.network,
            type: "root",
          })
        : await this.walletEmployee.get(walletId);
    if (contract.interface === "erc20" && !(await (instance as Erc20).checkApproval(wallet.address, amount)))
      throw new Error("Not Approved");
    else if (
      contract.interface === "erc721" &&
      !(await (instance as Erc721).checkApproval(wallet.address, token.tokenId as number))
    )
      throw new Error("Not Approved");
    else if (
      contract.interface === "erc1155" &&
      !(await (instance as Erc1155).checkApproval(wallet.address, token.tokenId as number, amount))
    )
      throw new Error("Not Approved");
    else return true;
  }
  async validateTx(tokenId: Id, walletId: Id, hash: string, num: number) {
    const token = await this.tokenEmployee.get(tokenId);
    const contract = await this.Contract.pickById(token.contract);
    const instance = await this.networkEmployee.loadContract(contract);
    const wallet = await this.walletEmployee.get(walletId);
    try {
      const tx = await instance.contract.provider.getTransaction(hash);
      const decoded = instance.settings.intf.parseTransaction({
        data: tx.data,
        value: tx.value,
      });
      //! should check validity of tx
      // TransactionDescription {
      //   args: [
      //     '0x9C8B2276D490141Ae1440Da660E470E7C0349C63',
      //     BigNumber { _hex: '0x0a', _isBigNumber: true },
      //     to: '0x9C8B2276D490141Ae1440Da660E470E7C0349C63',
      //     amount: BigNumber { _hex: '0x0a', _isBigNumber: true }
      //   ],
      //   functionFragment: {
      //     type: 'function',
      //     name: 'transfer',
      //     constant: false,
      //     inputs: [ [ParamType], [ParamType] ],
      //     outputs: [ [ParamType] ],
      //     payable: false,
      //     stateMutability: 'nonpayable',
      //     gas: null,
      //     _isFragment: true,
      //     constructor: [Function: FunctionFragment] {
      //       from: [Function (anonymous)],
      //       fromObject: [Function (anonymous)],
      //       fromString: [Function (anonymous)],
      //       isFunctionFragment: [Function (anonymous)]
      //     },
      //     format: [Function (anonymous)]
      //   },
      //   name: 'transfer',
      //   signature: 'transfer(address,uint256)',
      //   sighash: '0xa9059cbb',
      //   value: BigNumber { _hex: '0x00', _isBigNumber: true }
      // }
      await tx.wait(1);
      return true;
    } catch (e) {
      return false;
    }
  }
  override async create(data: Contract.Input) {
    return await this.generateContract(data);
  }
  async generateContract(data: Contract.Input, ids: number[] = []) {
    const intf = await this.networkEmployee.getInterface(data.network, data.address);
    // return true;
    const contract: Contract.Doc =
      (await this.Contract.findOne({ address: data.address.toLowerCase() })) ??
      (await this.Contract.create({
        interface: intf,
        ...data,
        address: data.address.toLowerCase(),
      }));
    if (!contract.isNew) await this.tokenEmployee.activateTokens(contract._id);
    const instance = await this.networkEmployee.loadContract(contract);
    const info = await instance.info();
    await contract.merge({ ...info, status: "active" }).save();
    await this.snapshot(contract._id, []);
    if (ids.length && contract.interface === "erc1155") {
      const uris = await (instance as Erc1155).tokenUris(ids);
      await this.tokenEmployee.generates(
        contract,
        ids.map((tokenId, idx) => ({ tokenId, uri: uris[idx] }))
      );
    }
    await this.#listenContract(contract);
    return contract;
  }
  override async remove(contractId: Id) {
    const contract = await this.Contract.pickById(contractId);
    await this.ownershipEmployee.removeOwnershipsByContract(contract._id);
    await this.tokenEmployee.deactivateTokens(contractId);
    return await contract.merge({ status: "inactive" }).save();
  }
  async onModuleDestroy() {
    await Promise.all(this.destroyers.map(async (destroyer) => await destroyer()));
  }
  async summarize(): Promise<cnst.ContractSummary> {
    return {
      totalContract: await this.Contract.countDocuments({
        status: { $ne: "inactive" },
      }),
    };
  }
}
