const hre = require("hardhat");

async function main() {
    const contractAddress = "0x2E0216fa94f66359bE733F86E029d88Fad648B07"; // Replace with actual address
    const GasTest = await hre.ethers.getContractAt("GasTest", contractAddress);

    console.log("🔍 Fetching stored values...");

    // Retrieve standard stored value
    const standardValue = await GasTest.getValue();
    console.log("Standard storage value:", standardValue.toString());

    // Retrieve optimized stored value
    const optimizedValue = await GasTest.getOptimizedValue();
    console.log("Optimized storage value:", optimizedValue.toString());

    console.log("⚡ Storing new values...");

    // Store values using both methods
    const tx1 = await GasTest.storeData(100);
    await tx1.wait();

    const tx2 = await GasTest.storeDataOptimized(200);
    await tx2.wait();

    console.log("✅ New values stored!");

    // Retrieve updated values
    const updatedStandardValue = await GasTest.getValue();
    console.log("Updated standard storage value:", updatedStandardValue.toString());

    const updatedOptimizedValue = await GasTest.getOptimizedValue();
    console.log("Updated optimized storage value:", updatedOptimizedValue.toString());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});