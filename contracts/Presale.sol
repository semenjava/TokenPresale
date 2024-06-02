// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Presale is Ownable {
    IERC20 public token;

    constructor(IERC20 _token, address initialOwner) Ownable(initialOwner) {
        token = _token;
    }

    function buyTokens() public payable {
        uint256 amount = msg.value * 100; // Example rate: 1 ETH = 100 tokens
        token.transfer(msg.sender, amount);
    }

    function withdraw() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
}
