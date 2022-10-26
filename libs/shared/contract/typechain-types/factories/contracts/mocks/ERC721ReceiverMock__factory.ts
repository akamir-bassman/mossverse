/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ERC721ReceiverMock,
  ERC721ReceiverMockInterface,
} from "../../../contracts/mocks/ERC721ReceiverMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "retval",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "Received",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516105e73803806105e783398181016040528101906100329190610093565b807bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166080817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681525050506100ff565b60008151905061008d816100e8565b92915050565b6000602082840312156100a557600080fd5b60006100b38482850161007e565b91505092915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6100f1816100bc565b81146100fc57600080fd5b50565b60805160e01c60e01b6104c861011f600039600060a501526104c86000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c8063150b7a0214610030575b600080fd5b61004a60048036038101906100459190610160565b610060565b60405161005791906102aa565b60405180910390f35b60007f28fa6e16458f9c24aa59ddd4085264573006dbe30304837873c7deafc702b03885858585614e2060405161009b959493929190610250565b60405180910390a17f00000000000000000000000000000000000000000000000000000000000000009050949350505050565b60006100e16100dc846102ea565b6102c5565b9050828152602081018484840111156100f957600080fd5b6101048482856103b1565b509392505050565b60008135905061011b81610464565b92915050565b600082601f83011261013257600080fd5b81356101428482602086016100ce565b91505092915050565b60008135905061015a8161047b565b92915050565b6000806000806080858703121561017657600080fd5b60006101848782880161010c565b94505060206101958782880161010c565b93505060406101a68782880161014b565b925050606085013567ffffffffffffffff8111156101c357600080fd5b6101cf87828801610121565b91505092959194509250565b6101e481610337565b82525050565b6101f381610349565b82525050565b60006102048261031b565b61020e8185610326565b935061021e8185602086016103c0565b61022781610453565b840191505092915050565b61023b8161039f565b82525050565b61024a81610395565b82525050565b600060a08201905061026560008301886101db565b61027260208301876101db565b61027f6040830186610241565b818103606083015261029181856101f9565b90506102a06080830184610232565b9695505050505050565b60006020820190506102bf60008301846101ea565b92915050565b60006102cf6102e0565b90506102db82826103f3565b919050565b6000604051905090565b600067ffffffffffffffff82111561030557610304610424565b5b61030e82610453565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b600061034282610375565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60006103aa82610395565b9050919050565b82818337600083830152505050565b60005b838110156103de5780820151818401526020810190506103c3565b838111156103ed576000848401525b50505050565b6103fc82610453565b810181811067ffffffffffffffff8211171561041b5761041a610424565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b61046d81610337565b811461047857600080fd5b50565b61048481610395565b811461048f57600080fd5b5056fea2646970667358221220200664beda1cdbd3ac7c9d0ceec773162e8f394544d35fd0aa5b3d4a80773e1064736f6c63430008040033";

type ERC721ReceiverMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC721ReceiverMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC721ReceiverMock__factory extends ContractFactory {
  constructor(...args: ERC721ReceiverMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    retval: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC721ReceiverMock> {
    return super.deploy(retval, overrides || {}) as Promise<ERC721ReceiverMock>;
  }
  override getDeployTransaction(
    retval: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(retval, overrides || {});
  }
  override attach(address: string): ERC721ReceiverMock {
    return super.attach(address) as ERC721ReceiverMock;
  }
  override connect(signer: Signer): ERC721ReceiverMock__factory {
    return super.connect(signer) as ERC721ReceiverMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC721ReceiverMockInterface {
    return new utils.Interface(_abi) as ERC721ReceiverMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC721ReceiverMock {
    return new Contract(address, _abi, signerOrProvider) as ERC721ReceiverMock;
  }
}
