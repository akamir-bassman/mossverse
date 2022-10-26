// SPDX-License-Identifier: MIT
// Creators: Chiru Labs

pragma solidity ^0.8.4;

import "../ERC721A.sol";

contract ERC721AMock is ERC721A {
  constructor(string memory name_, string memory symbol_) ERC721A(name_, symbol_) {}

  function numberMinted(address owner) public view returns (uint256) {
    return _numberMinted(owner);
  }

  function getAux(address owner) public view returns (uint64) {
    return _getAux(owner);
  }

  function setAux(address owner, uint64 aux) public {
    _setAux(owner, aux);
  }

  function baseURI() public view returns (string memory) {
    return _baseURI();
  }

  function exists(uint256 tokenId) public view returns (bool) {
    return _exists(tokenId);
  }

  function safeMint(
    address to,
    uint256 quantity,
    uint256 lockUntil
  ) public {
    _safeMint(to, quantity, lockUntil);
  }

  function safeMint(
    address to,
    uint256 quantity,
    uint256 lockUntil,
    bytes memory _data
  ) public {
    _safeMint(to, quantity, lockUntil, _data);
  }

  function mint(
    address to,
    uint256 quantity,
    uint256 lockUntil,
    bytes memory _data,
    bool safe
  ) public {
    _mint(to, quantity, lockUntil, _data, safe);
  }
}
