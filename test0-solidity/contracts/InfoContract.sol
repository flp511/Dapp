// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract InfoContract {
    string name;
    uint256 age;
    // 用于交互
    event Instructor(string name, uint256 age);

    function sayHi() public pure returns (string memory) {
        return "Hi";
    }

    function setInfo(string memory _name, uint256 _age) public {
        name = _name;
        age = _age;
        emit Instructor(name, age);
    }

    function getInfo() public view returns (string memory, uint256) {
        // 类似js的对象，前端可以解构获得name/age变量值
        return (name, age);
    }
}
