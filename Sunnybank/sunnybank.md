# SunnyBank 
⚡️ just user can deposit and withdraw 

   

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;





contract SunnyBank {
   

   mapping(address => uint256) public balances;
   uint256 public totalValue;

   function deposit() public payable {
      require(msg.value > 0 ,"value must over zero");
      balances[msg.sender] += msg.value;
      totalValue += msg.value;
   }

   function withdraw(uint256 _amount) public  {
      require(_amount > 0 ,"value must over zero");
      require(balances[msg.sender] >= _amount , "your balance is lack");
      balances[msg.sender] -= _amount;
      totalValue -= _amount;
      payable(msg.sender).transfer(_amount);
   }


}




```

## What I learned 
* payable  
  ```when contract get ether use payable but contract send ether not use payable keyword ```  
    
