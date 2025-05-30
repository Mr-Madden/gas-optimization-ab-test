const fs = require("fs");
const hre = require("hardhat");

describe("Gas Optimization A/B Test", function () {
    let gasTest, owner;

    beforeEach(async function () {
        const GasTest = await hre.ethers.getContractFactory("GasTest");
        gasTest = await GasTest.deploy();
        await gasTest.waitForDeployment();

        [owner] = await hre.ethers.getSigners();
    });

    async function logGasUsage(functionName, tx) {
        const receipt = await tx.wait();
        const gasUsed = receipt.gasUsed.toString();
        console.log(`${functionName} Gas Used:`, gasUsed);

        fs.appendFileSync("gas_log.txt", `${new Date().toISOString()} - ${functionName}: ${gasUsed}\n`);
    }

    it("Measures gas usage of storeData", async function () {
        const tx = await gasTest.storeData(42);
        await logGasUsage("storeData", tx);
    });

    it("Measures gas usage of storeDataOptimized", async function () {
        const tx = await gasTest.storeDataOptimized(42);
        await logGasUsage("storeDataOptimized", tx);
    });
});