const hre = require("hardhat");

async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const roboPunkNFT = await RoboPunksNFT.deploy("Hello, Hardhat!");

  await roboPunkNFT.deployed();

  console.log("RoboPunksNFT deployed to:", roboPunkNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
