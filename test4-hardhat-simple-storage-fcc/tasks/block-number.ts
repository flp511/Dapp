import { task } from "hardhat/config"

export default task('block-number', 'Print the current block number').setAction(
    async function(taskArgs: any[], hre) {
        const blockNumber = await hre.ethers.provider.getBlockNumber()
        console.log("🚀 ~ file: block-number.js:6 ~ function ~ blockNumber:", blockNumber)
    }
)

// module.exports = {}