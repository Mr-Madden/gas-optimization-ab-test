# gas-optimization-ab-test
An A/B testing project for gas optimization in Solidity smart contracts
# ⚡ Gas Optimization A/B Test  

## **Project Overview**  
This repository implements a **gas efficiency A/B test** in Solidity, comparing two storage methods:
1. **Standard Storage (`storeData`)** – Uses Solidity's default mapping storage (higher gas).  
2. **Optimized Storage (`storeDataOptimized`)** – Uses inline assembly with keccak256 hashing (lower gas).

By running transactions on the **Sepolia testnet**, this project logs gas consumption data, allowing **trend analysis** for smart contract optimization.

---

## **Technologies Used**  
### **Blockchain & Smart Contracts**  
- Solidity (`^0.8.20`) – Smart contract programming language  
- Hardhat – Ethereum development framework  
- Alchemy / Infura – RPC provider for Sepolia testnet  
- Ethers.js – Library for interacting with Ethereum contracts  

### **Gas Usage Tracking**  
- Hardhat Test Suite – Automated transaction execution  
- Node.js (`fs` module) – Logs gas usage to `gas_log.txt`  
- Python (`pandas` & `matplotlib`) – Data visualization  
- Excel – For manual analysis & trend tracking  

---

## **Installation & Setup**  
### **1️⃣ Clone the Repository**  
```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/gas-ab-test.git
cd gas-ab-test
