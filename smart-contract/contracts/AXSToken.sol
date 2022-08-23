/**
 *Submitted for verification at Etherscan.io on 2021-04-26
*/

// SPDX-License-Identifier: UNLICENSED

import "./token/erc20/ERC20Detailed.sol";
import "./token/erc20/ERC20GatewayWhitelist.sol";

pragma solidity >=0.5.17;

contract AXSToken is ERC20Detailed, ERC20GatewayWhitelist {
  using SafeMath for uint256;

  constructor(address _mainchainGateway) ERC20Detailed("Axie Infinity Shard", "AXS", 18)
  {
    totalSupply = uint256(270000000).mul(uint256(10)**18);
    balanceOf[msg.sender] = totalSupply;
    emit Transfer(address(0), msg.sender, totalSupply);

    _setGateway(_mainchainGateway);
  }

  function allowance(address _owner, address _spender) override(ERC20, ERC20GatewayWhitelist) public view returns (uint256 _value) {
    return super.allowance(_owner, _spender);
  }

  function transferFrom(address _from, address _to, uint256 _value) override(ERC20, ERC20GatewayWhitelist) public returns (bool _success) {
    return super.transferFrom(_from, _to, _value);
  }
}