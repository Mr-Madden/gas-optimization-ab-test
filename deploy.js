const hre = require("hardhat");

async function main() {
    const GasTest = await hre.ethers.getContractFactory("GasTest");
    const gasTest = await GasTest.deploy();
    await gasTest.waitForDeployment();

    console.log("Contract deployed to:", gasTest.target);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});