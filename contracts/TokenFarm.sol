//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenFarm is Ownable{
//stakeTokens
//unStakeTokens
//issueTokens
//addAllowedTokens
//get EthValue

    address[] public allowedTokens;

    function stakeTokens(uint256 _amount, address _token) public {
        require(_amount > 0, "amount cannot be less than 0");
    }

    function addAllowedTokens(address _token) public onlyOwner {
        allowedTokens.push(_token);
    }
    function tokenIsAllowed(address _token) public returns (bool) {
        for( uint256 allowedTokensIndex=0; allowedTokensIndex < allowedTokens.length; allowedTokensIndex++) {
            if (allowedTokens[allowedTokensIndex] == _token) {
                return true;
            }
        }
        return false;
    }
}


