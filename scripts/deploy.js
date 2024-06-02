const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy(deployer.address);
    await token.deployed();
    console.log("Token deployed to:", token.address);

    const Presale = await hre.ethers.getContractFactory("Presale");
    const presale = await Presale.deploy(token.address, deployer.address);
    await presale.deployed();
    console.log("Presale deployed to:", presale.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
