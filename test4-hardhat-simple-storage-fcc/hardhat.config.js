/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");
require("./tasks/block-number");
require("hardhat-gas-reporter");
require('solidity-coverage')

require('dotenv').config()
const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY

module.exports = {
    defaultNetwork: "hardhat", // 默认指定该网络
    networks: {
        sepolia: {
            url: SEPOLIA_RPC_URL,
            accounts: [SEPOLIA_PRIVATE_KEY], // metamask上sepolia的测试账号
            chainId: 11155111,
        },
        localhost: {
            url: "http://127.0.0.1:8545/",
            // accounts, // hardhat内置了账号信息
            chainId: 31337,
        }
    },
    etherscan: {
        // Your API key for Etherscan
        // Obtain one at https://etherscan.io/
        apiKey: ETHERSCAN_API_KEY
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt", // 去掉该字段，会展示在命令行中
        currency: 'USD', // https://coinmarketcap.com/api/documentation/v1/#section/Standards-and-Conventions
        coinmarketcap: COINMARKETCAP_API_KEY,
        noColors: true, // 要输出到.txt的话，把这个开启
        token: 'MATIC', //Ethereum 是默认网络，默认值：ETH
    },
    sourcify: {
        // Disabled by default
        // Doesn't need an API key
        enabled: true
    },
    solidity: "0.8.19",
};