/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IKIP17",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP17__factory>;
    getContractFactory(
      name: "IKIP37",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP37__factory>;
    getContractFactory(
      name: "IKIP7",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP7__factory>;
    getContractFactory(
      name: "IKIP13",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IKIP13__factory>;
    getContractFactory(
      name: "AccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AccessControl__factory>;
    getContractFactory(
      name: "IAccessControl",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAccessControl__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Pausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Pausable__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "AkaMarket",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AkaMarket__factory>;
    getContractFactory(
      name: "Akamir",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Akamir__factory>;
    getContractFactory(
      name: "Collection",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Collection__factory>;
    getContractFactory(
      name: "FERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FERC1155__factory>;
    getContractFactory(
      name: "FERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FERC1155__factory>;
    getContractFactory(
      name: "Fraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Fraction__factory>;
    getContractFactory(
      name: "AkamirGenesis",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AkamirGenesis__factory>;
    getContractFactory(
      name: "AkaToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AkaToken__factory>;
    getContractFactory(
      name: "AKATransfer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AKATransfer__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "FERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FERC1155__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IFERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFERC1155__factory>;
    getContractFactory(
      name: "ISettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISettings__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;
    getContractFactory(
      name: "VaultFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultFactory__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "ERC721AToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AToken__factory>;
    getContractFactory(
      name: "ERC721AToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AToken__factory>;
    getContractFactory(
      name: "ERC4907A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4907A__factory>;
    getContractFactory(
      name: "ERC721ABurnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ABurnable__factory>;
    getContractFactory(
      name: "ERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC4907A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC4907A__factory>;
    getContractFactory(
      name: "IERC721ABurnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721ABurnable__factory>;
    getContractFactory(
      name: "IERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;
    getContractFactory(
      name: "ERC4907AMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC4907AMock__factory>;
    getContractFactory(
      name: "ERC721ABurnableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ABurnableMock__factory>;
    getContractFactory(
      name: "ERC721ABurnableStartTokenIdMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ABurnableStartTokenIdMock__factory>;
    getContractFactory(
      name: "ERC721AGasReporterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AGasReporterMock__factory>;
    getContractFactory(
      name: "ERC721AMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AMock__factory>;
    getContractFactory(
      name: "ERC721AQueryableMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryableMock__factory>;
    getContractFactory(
      name: "ERC721AQueryableStartTokenIdMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryableStartTokenIdMock__factory>;
    getContractFactory(
      name: "ERC721AStartTokenIdMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AStartTokenIdMock__factory>;
    getContractFactory(
      name: "ERC721ATransferCounterMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ATransferCounterMock__factory>;
    getContractFactory(
      name: "ERC721AWithERC2309Mock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AWithERC2309Mock__factory>;
    getContractFactory(
      name: "ERC721ReceiverMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721ReceiverMock__factory>;
    getContractFactory(
      name: "IERC721AMock",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AMock__factory>;
    getContractFactory(
      name: "StartTokenIdHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.StartTokenIdHelper__factory>;
    getContractFactory(
      name: "Multicall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Multicall__factory>;
    getContractFactory(
      name: "ERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155__factory>;
    getContractFactory(
      name: "ERC1155Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Holder__factory>;
    getContractFactory(
      name: "ERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1155Receiver__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "FERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FERC1155__factory>;
    getContractFactory(
      name: "IERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155__factory>;
    getContractFactory(
      name: "IERC1155MetadataURI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155MetadataURI__factory>;
    getContractFactory(
      name: "IERC1155Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1155Receiver__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "IFERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFERC1155__factory>;
    getContractFactory(
      name: "ISettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISettings__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "Vault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vault__factory>;
    getContractFactory(
      name: "VaultFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VaultFactory__factory>;

    getContractAt(
      name: "IKIP17",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP17>;
    getContractAt(
      name: "IKIP37",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP37>;
    getContractAt(
      name: "IKIP7",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP7>;
    getContractAt(
      name: "IKIP13",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IKIP13>;
    getContractAt(
      name: "AccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AccessControl>;
    getContractAt(
      name: "IAccessControl",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAccessControl>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Pausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Pausable>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "AkaMarket",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AkaMarket>;
    getContractAt(
      name: "Akamir",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Akamir>;
    getContractAt(
      name: "Collection",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Collection>;
    getContractAt(
      name: "FERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FERC1155>;
    getContractAt(
      name: "FERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FERC1155>;
    getContractAt(
      name: "Fraction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Fraction>;
    getContractAt(
      name: "AkamirGenesis",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AkamirGenesis>;
    getContractAt(
      name: "AkaToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AkaToken>;
    getContractAt(
      name: "AKATransfer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AKATransfer>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "FERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FERC1155>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IFERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFERC1155>;
    getContractAt(
      name: "ISettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISettings>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Vault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;
    getContractAt(
      name: "VaultFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultFactory>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "ERC721AToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AToken>;
    getContractAt(
      name: "ERC721AToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AToken>;
    getContractAt(
      name: "ERC4907A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4907A>;
    getContractAt(
      name: "ERC721ABurnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ABurnable>;
    getContractAt(
      name: "ERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryable>;
    getContractAt(
      name: "IERC4907A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC4907A>;
    getContractAt(
      name: "IERC721ABurnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721ABurnable>;
    getContractAt(
      name: "IERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AQueryable>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;
    getContractAt(
      name: "ERC4907AMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC4907AMock>;
    getContractAt(
      name: "ERC721ABurnableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ABurnableMock>;
    getContractAt(
      name: "ERC721ABurnableStartTokenIdMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ABurnableStartTokenIdMock>;
    getContractAt(
      name: "ERC721AGasReporterMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AGasReporterMock>;
    getContractAt(
      name: "ERC721AMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AMock>;
    getContractAt(
      name: "ERC721AQueryableMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryableMock>;
    getContractAt(
      name: "ERC721AQueryableStartTokenIdMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryableStartTokenIdMock>;
    getContractAt(
      name: "ERC721AStartTokenIdMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AStartTokenIdMock>;
    getContractAt(
      name: "ERC721ATransferCounterMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ATransferCounterMock>;
    getContractAt(
      name: "ERC721AWithERC2309Mock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AWithERC2309Mock>;
    getContractAt(
      name: "ERC721ReceiverMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721ReceiverMock>;
    getContractAt(
      name: "IERC721AMock",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AMock>;
    getContractAt(
      name: "StartTokenIdHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.StartTokenIdHelper>;
    getContractAt(
      name: "Multicall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Multicall>;
    getContractAt(
      name: "ERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155>;
    getContractAt(
      name: "ERC1155Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Holder>;
    getContractAt(
      name: "ERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1155Receiver>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "FERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FERC1155>;
    getContractAt(
      name: "IERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155>;
    getContractAt(
      name: "IERC1155MetadataURI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155MetadataURI>;
    getContractAt(
      name: "IERC1155Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1155Receiver>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "IFERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFERC1155>;
    getContractAt(
      name: "ISettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISettings>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "Vault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vault>;
    getContractAt(
      name: "VaultFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VaultFactory>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
