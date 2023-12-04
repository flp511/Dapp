const { ethers, run, network } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners(); // 与test3中哪些代码对等???

    console.log("🚀 ~ Deploying contracts with the account:", deployer.address);
    const simpleStorage = await ethers.deployContract("SimpleStorage"); // 与test3中哪些代码对等???
    const simpleStorageAddress = await simpleStorage.getAddress();
    console.log("🚀 ~ SimpleStorage address:", simpleStorageAddress);
    console.log("🚀 ~ 不能直接从simpleStorage获取 address:", simpleStorage.address);

    // console.log("🚀 ~ file: deploy-simple-storage.js:11 ~ main ~ network:", network)
    if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) { // 是sepolia测试网
        console.log('waiting for Verifying...')
        await simpleStorage.deploymentTransaction().wait(1)
        await verify(simpleStorageAddress, [])
    } else { // 是hardhat测试网
        const currentValue = await simpleStorage.retrieve()
        console.log("🚀 ~ file: deploy-simple-storage.js:16 ~ main ~ currentValue:", currentValue.toString())
        await simpleStorage.store(7)
        await simpleStorage.deploymentTransaction().wait(1)
        const updateCurrentValue = await simpleStorage.retrieve()
        console.log("🚀 ~ file: deploy-simple-storage.js:20 ~ main ~ updateCurrentValue:", updateCurrentValue.toString())
    }
}

async function verify(contractAddress, args) {
    console.log('Verifying contract...')
    try {
        // TODO ????? 报错，整个verify的意义是什么，根本没有写校验什么，怎么校验呢？？？框架已经做了???
        await run('verify:verify', {
            address: contractAddress,
            constructorArguments: args, // TODO
        })
    } catch (error) {
        console.log("🚀 ~ verify ~ error:", error)
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })