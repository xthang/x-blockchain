/**
 *Submitted for verification at Etherscan.io on 2021-04-26
*/

// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.17;

import "./token/erc20/ERC20Detailed.sol";
import "./token/erc20/ERC20Mintable.sol";
import "./token/erc20/ERC20GatewayWhitelist.sol";

contract SmoothLovePotion is ERC20Detailed, ERC20Mintable, ERC20GatewayWhitelist {
  constructor(address _mainchainGateway)
    ERC20Detailed("Smooth Love Potion", "SLP", 0)
  {
    _setGateway(_mainchainGateway);

    address[] memory _minters = new address[](1);
    _minters[0] = _mainchainGateway;
    addMinters(_minters);
  }

  function allowance(address _owner, address _spender) override(ERC20, ERC20GatewayWhitelist) public view returns (uint256 _value) {
    return super.allowance(_owner, _spender);
  }

  function transferFrom(address _from, address _to, uint256 _value) override(ERC20, ERC20GatewayWhitelist) public returns (bool _success) {
    return super.transferFrom(_from, _to, _value);
  }
}