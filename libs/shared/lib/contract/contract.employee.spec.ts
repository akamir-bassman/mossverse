import * as cnst from "../cnst";
import * as db from "../db";
import * as sample from "../sample";
import { ContractEmployee } from "./contract.employee";
import { Erc1155, Erc20, Erc721, Utils } from "@util/client";
import { TestSystem } from "@shared/test-server";
import { environment } from "../env/environment";
import { ethers } from "ethers";
import { registerModules } from "../server";

describe("Contract Service", () => {
  const system = new TestSystem();
  let contractEmployee: ContractEmployee;
  let networkEmployee: emp.NetworkEmployee;
  let walletEmployee: emp.WalletEmployee;
  let tokenEmployee: emp.TokenEmployee;
  let etherService: emp.external.EtherService;
  let network: db.Network.Doc;
  let wallet: db.Wallet.Doc;
  let testWallets: db.Wallet.Doc[];
  let etherWallets: ethers.Wallet[];
  let erc20contract: db.Contract.Doc;
  let erc721contract: db.Contract.Doc;
  let erc1155contract: db.Contract.Doc;
  beforeAll(async () => {
    const app = await system.init(registerModules(environment));
    contractEmployee = app.get<ContractEmployee>(ContractEmployee);
    networkEmployee = app.get<emp.NetworkEmployee>(emp.NetworkEmployee);
    walletEmployee = app.get<emp.WalletEmployee>(emp.WalletEmployee);
    tokenEmployee = app.get<emp.TokenEmployee>(emp.TokenEmployee);
    etherService = app.get<emp.external.EtherService>(emp.external.EtherService);
    network = await networkEmployee.create(sample.networkInput("ethereum"));
    wallet = await walletEmployee.myWallet(network._id, environment.ethereum.root.address);
    testWallets = await Promise.all(
      environment.ethereum.testWallets.map(async (w) => await walletEmployee.myWallet(network._id, w.address))
    );
    await contractEmployee.listenAllContracts();
    etherWallets = environment.ethereum.testWallets.map((w) => new ethers.Wallet(w.privateKey, etherService.provider));
  }, 10000);
  afterAll(async () => await system.terminate());

  let input: cnst.ContractInput;
  it("Create ERC-20 Contract", async () => {
    input = sample.contractInput(network._id, environment.ethereum.erc20);
    erc20contract = await contractEmployee.generateContract(input);
    expect(erc20contract.status).toEqual("active");
    expect(erc20contract.interface).toEqual("erc20");
    expect(erc20contract).toEqual(expect.objectContaining(input));
    await wallet.refresh();
    expect(wallet.items.some((item) => item.contract.equals(erc20contract._id))).toBeTruthy();
  }, 60000);
  it("Update ERC20 Contract", async () => {
    erc20contract = await contractEmployee.update(erc20contract._id, {
      displayName: "Name",
    });
    expect(erc20contract.displayName).toEqual("Name");
  });
  it("Snapshot ERC20 Contract", async () => {
    await wallet.merge({ items: [] }).save();
    await erc20contract.merge({ snapshot: [] }).save();
    const ownerships = await contractEmployee.snapshot(erc20contract._id, [], true);
    await wallet.refresh();
    await erc20contract.refresh();
    const snapshot = await contractEmployee.getSnapshot(erc20contract._id);
    expect(snapshot).toBeDefined();
    expect(snapshot.length).toBeGreaterThan(0);
    expect(wallet.items.some((item) => item.contract.equals(erc20contract._id))).toBeTruthy();
  });
  it("Detect Transfer of ERC20", async () => {
    const instance = (await networkEmployee.loadContract(erc20contract)) as Erc20;
    await Utils.sleep(2000);
    await testWallets[0].refresh();
    const num = testWallets[0].items.find((item) => item.contract.equals(erc20contract._id))?.num ?? 0;
    await instance.contract.transfer(testWallets[0].address, 10);
    await Utils.sleep(8000);
    await testWallets[0].refresh();
    expect(testWallets[0].items.find((item) => item.contract.equals(erc20contract._id))?.num ?? 0).toEqual(num + 10);
    await instance.contract.connect(etherWallets[0]).transfer(wallet.address, 10);
  }, 60000);
  it("Remove ERC20 Contract", async () => {
    erc20contract = await contractEmployee.remove(erc20contract._id);
    expect(erc20contract.status).toEqual("inactive");
    await wallet.refresh();
    expect(wallet.items.some((item) => item.contract.equals(erc20contract._id))).toBeFalsy();
  });
  it("Create ERC-721 Contract", async () => {
    input = sample.contractInput(network._id, environment.ethereum.erc721);
    erc721contract = await contractEmployee.generateContract(input);
    expect(erc721contract.status).toEqual("active");
    expect(erc721contract.interface).toEqual("erc721");
    expect(erc721contract).toEqual(expect.objectContaining(input));
  }, 300000);
  it("Update ERC721 Contract", async () => {
    erc721contract = await contractEmployee.update(erc721contract._id, {
      displayName: "Name",
    });
    expect(erc721contract.displayName).toEqual("Name");
  }, 30000);
  it("Snapshot ERC721 Contract", async () => {
    await wallet.merge({ items: [] }).save();
    await erc721contract.merge({ snapshot: [] }).save();
    const ownerships = await contractEmployee.snapshot(erc721contract._id, [], true);
    await wallet.refresh();
    await erc721contract.refresh();
    const snapshot = await contractEmployee.getSnapshot(erc721contract._id);
    expect(snapshot).toBeDefined();
    expect(snapshot.length).toBeGreaterThan(0);
    expect(wallet.items.some((item) => item.contract.equals(erc721contract._id))).toBeTruthy();
  }, 300000);
  it("Detect Transfer of ERC721", async () => {
    const instance = (await networkEmployee.loadContract(erc721contract)) as Erc721;
    await Utils.sleep(2000);
    const tokenItem = wallet.items.find((item) => item.contract.equals(erc721contract._id));
    if (!tokenItem) throw new Error("No TokenItem");
    const token = await tokenEmployee.pick({ _id: tokenItem.token });
    await instance.contract.transferFrom(wallet.address, testWallets[0].address, token.tokenId ?? 0, {
      gasLimit: 300000,
    });
    await Utils.sleep(8000);
    await testWallets[0].refresh();
    expect(testWallets[0].items.find((item) => item.token.equals(token._id))?.num).toEqual(1);
    await instance.contract
      .connect(etherWallets[0])
      .transferFrom(testWallets[0].address, wallet.address, token.tokenId ?? 0, { gasLimit: 300000 });
  }, 150000);
  it("Remove ERC721 Contract", async () => {
    erc721contract = await contractEmployee.remove(erc721contract._id);
    expect(erc721contract.status).toEqual("inactive");
    await wallet.refresh();
    expect(wallet.items.some((item) => item.contract.equals(erc721contract._id))).toBeFalsy();
  });
  it("Create ERC-1155 Contract", async () => {
    input = sample.contractInput(network._id, environment.ethereum.erc1155);
    erc1155contract = await contractEmployee.generateContract(input);
    expect(erc1155contract.status).toEqual("active");
    expect(erc1155contract.interface).toEqual("erc1155");
    expect(erc1155contract).toEqual(expect.objectContaining(input));
  });
  it("Update ERC1155 Contract", async () => {
    erc1155contract = await contractEmployee.update(erc1155contract._id, {
      displayName: "Name",
    });
    expect(erc1155contract.displayName).toEqual("Name");
  });
  it("Snapshot ERC1155 Contract", async () => {
    const instance = (await networkEmployee.loadContract(erc1155contract)) as Erc1155;
    await instance.contract.safeTransferFrom(wallet.address, testWallets[0].address, 0, 1, "0x00");
    await Utils.sleep(8000);
    await wallet.merge({ items: [] }).save();
    await erc1155contract.merge({ snapshot: [] }).save();
    const ownerships = await contractEmployee.snapshot(erc1155contract._id, [], true);
    await wallet.refresh();
    await erc1155contract.refresh();
    const snapshot = await contractEmployee.getSnapshot(erc1155contract._id);
    expect(snapshot).toBeDefined();
    expect(snapshot.length).toBeGreaterThan(0);
    expect(wallet.items.some((item) => item.contract.equals(erc1155contract._id))).toBeTruthy();
  }, 30000);
  it("Detect Transfer of ERC1155", async () => {
    const instance = (await networkEmployee.loadContract(erc1155contract)) as Erc1155;
    const tokenItem = wallet.items.find((item) => item.contract.equals(erc1155contract._id));
    if (!tokenItem) throw new Error("No TokenItem");
    const token = await tokenEmployee.pick({ _id: tokenItem.token });
    await Utils.sleep(2000);
    await testWallets[0].refresh();
    const num = testWallets[0].items.find((item) => item.token.equals(token._id))?.num ?? 0;
    await instance.contract.safeTransferFrom(wallet.address, testWallets[0].address, token.tokenId ?? 0, 10, "0x00");
    await Utils.sleep(8000);
    await testWallets[0].refresh();
    expect(testWallets[0].items.find((item) => item.token.equals(token._id))?.num).toEqual(num + 10);
    await instance.contract
      .connect(etherWallets[0])
      .safeTransferFrom(testWallets[0].address, wallet.address, token.tokenId ?? 0, 11, "0x00");
  }, 60000);
  it("Remove ERC1155 Contract", async () => {
    erc1155contract = await contractEmployee.remove(erc1155contract._id);
    expect(erc1155contract.status).toEqual("inactive");
    await wallet.refresh();
    expect(wallet.items.some((item) => item.contract.equals(erc1155contract._id))).toBeFalsy();
  });
  it("Update Inventory of Wallet", async () => {
    erc20contract = await contractEmployee.generateContract(
      sample.contractInput(network._id, environment.ethereum.erc20)
    );
    erc721contract = await contractEmployee.generateContract(
      sample.contractInput(network._id, environment.ethereum.erc721)
    );
    erc1155contract = await contractEmployee.generateContract(
      sample.contractInput(network._id, environment.ethereum.erc1155)
    );
    // const instance = (await networkEmployee.loadContract(erc1155contract)) as Erc1155;
    // await instance.contract.safeTransferFrom(wallet.address, testWallets[0].address, 0, 1, "0x00");
    // await Utils.sleep(5000);
    await wallet.refresh();
    expect(wallet.items.length).toBeGreaterThan(0);
    const items = [...wallet.items];
    await wallet.merge({ items: [] }).save();
    const nextWallet = await contractEmployee.inventory(wallet);
    expect(nextWallet.items.length).toBeGreaterThan(0);
    expect(
      items.every((item) => nextWallet.items.some((i) => i.token.equals(item.token) && i.num === item.num))
    ).toBeTruthy();
  }, 600000);
});
