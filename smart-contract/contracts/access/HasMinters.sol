/**
 *Submitted for verification at Etherscan.io on 2021-04-26
*/

// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.17;

import "./HasAdmin.sol";

contract HasMinters is HasAdmin {
  event MinterAdded(address indexed _minter);
  event MinterRemoved(address indexed _minter);

  address[] public minters;
  mapping (address => bool) public minter;

  modifier onlyMinter {
    require(minter[msg.sender], "sender is not an authorized minter");
    _;
  }

  function addMinters(address[] memory _addedMinters) public onlyAdmin {
    address _minter;

    for (uint256 i = 0; i < _addedMinters.length; i++) {
      _minter = _addedMinters[i];

      if (!minter[_minter]) {
        minters.push(_minter);
        minter[_minter] = true;
        emit MinterAdded(_minter);
      }
    }
  }

  function removeMinters(address[] memory _removedMinters) public onlyAdmin {
    address _minter;

    for (uint256 j = 0; j < _removedMinters.length; j++) {
      _minter = _removedMinters[j];

      if (minter[_minter]) {
        minter[_minter] = false;
        emit MinterRemoved(_minter);
      }
    }

    uint256 i = 0;

    while (i < minters.length) {
      _minter = minters[i];

      if (!minter[_minter]) {
        minters[i] = minters[minters.length - 1];
        delete minters[minters.length - 1];
        // minters.length--; // TODO: check this
      } else {
        i++;
      }
    }
  }

  function isMinter(address _addr) public view returns (bool) {
    return minter[_addr];
  }
}