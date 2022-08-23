// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.17;

interface IERC20Detailed {
  function name() external view returns (string memory _name);
  function symbol() external view returns (string memory _symbol);
  function decimals() external view returns (uint8 _decimals);
}