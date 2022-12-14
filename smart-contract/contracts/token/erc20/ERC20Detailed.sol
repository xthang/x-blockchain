// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.17;

import "./ERC20.sol";
import "./IERC20Detailed.sol";

contract ERC20Detailed is ERC20, IERC20Detailed {
  string public name;
  string public symbol;
  uint8 public decimals;

  constructor(string memory _name, string memory _symbol, uint8 _decimals) {
    name = _name;
    symbol = _symbol;
    decimals = _decimals;
  }
}