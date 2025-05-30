// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract GasTest {
    mapping(address => uint256) public data;

    // Version A: Standard storage (higher gas usage)
    function storeData(uint256 _data) external {
        data[msg.sender] = _data;
    }

    // Version B: Optimized storage using keccak256 hashing
    function storeDataOptimized(uint256 _data) external {
        bytes32 storageKey = keccak256(abi.encodePacked(msg.sender));

        assembly {
            sstore(storageKey, _data)
        }
    }

    // 🔥 Retrieve stored value from standard mapping (Version A)
    function getValue() external view returns (uint256) {
        return data[msg.sender];
    }

    // 🔥 Retrieve stored value from optimized storage (Version B)
    function getOptimizedValue() external view returns (uint256) {
        bytes32 storageKey = keccak256(abi.encodePacked(msg.sender));

        uint256 storedData;
        assembly {
            storedData := sload(storageKey)  // Load data from storage
        }

        return storedData;
    }
}