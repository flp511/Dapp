const { task } = require("hardhat/config")

task('block-number', 'Print the current block number').setAction(
    async function(taskArgs, hre) {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log("🚀 ~ file: block-number.js:6 ~ function ~ blockNumber:", blockNumber)
    }
)

module.exports = {}