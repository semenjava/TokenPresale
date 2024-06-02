require("@nomiclabs/hardhat-ethers");
require("dotenv").config();

if (!process.env.PRIVATE_KEY) {
    throw new Error("Please set your PRIVATE_KEY in a .env file");
}

const privateKey = process.env.PRIVATE_KEY.startsWith('0x') ? process.env.PRIVATE_KEY.slice(2) : process.env.PRIVATE_KEY;

if (privateKey.length !== 64) {
    throw new Error("Invalid private key length, expected 32 bytes (64 hex characters)");
}

module.exports = {
    solidity: {
        version: "0.8.20",
        settings: {
            optimizer: {
                enabled: true,
                runs: 200
            }
        }
    },
    networks: {
        polygon: {
            url: "https://polygon-rpc.com",
            accounts: [privateKey]
        }
    }
};
