// SPDX-License-Identifier: MIT

pragma solidity ^0.7.0;

contract Web3Connection {
     uint256 public number = 7;

     function changeNumber(uint _amount) public {
         number = _amount;
     }

}