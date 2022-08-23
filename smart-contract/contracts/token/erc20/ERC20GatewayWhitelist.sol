// SPDX-License-Identifier: UNLICENSED

pragma solidity >=0.5.17;

import "./ERC20.sol";

contract ERC20GatewayWhitelist is ERC20 {
  using SafeMath for uint256;

  address public mainchainGateway;

  function allowance(address _owner, address _spender)
    override virtual
    public
    view
    returns (uint256 _value)
  {
    if (_spender == mainchainGateway) return type(uint256).max;

    return _allowance[_owner][_spender];
  }

  function transferFrom(
    address _from,
    address _to,
    uint256 _value
  )
    override virtual
    public
    returns (bool _success)
  {
    if (allowance(_from, msg.sender) != type(uint256).max) {
      super._approve(_from, msg.sender, _allowance[_from][msg.sender].sub(_value));
    }

    _transfer(_from, _to, _value);
    return true;
  }

  function _setGateway(address _mainchainGateway) internal {
    require(
      _mainchainGateway != address(0),
      "ERC20GatewayWhitelist: setting gateway to the zero address"
    );
    mainchainGateway = _mainchainGateway;
  }
}