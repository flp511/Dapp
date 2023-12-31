保存合约地址
合约部署地址
测试基础设施
跨链应用
很好的扩展性/提供更多工具

使用hardhat的defi应用：MInstaDApp/Aave/Uniswap/SUshiSwap
还有那些不错的应用？Maker/Curve Finance/Compound/Convex Finance/yearn.finance

有哪些框架：heardhat/Foundary/Brownie/Anchor

##### hardhat安装/部署

`yarn add --dev hardhat`

`yarn hardhat`

`yarn hardhat compile`会提示需要装以下依赖：

`yarn add --dev @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-verify chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v6`

`yarn hardhat compile`

`yarn hardhat test`

什么是evm网络，每个网络都可以在上面运行，都有一个chainId与之对应，可以去`chainlist.org`查询

hardhat自动提供了RPC_URL和私钥

默认：defaultNetwork: "hardhat"

部署上hardhat测试网/ganache/sepolia：
执行`yarn hardhat run scripts/deploy.js` 相当于`yarn hardhat run scripts/deploy.js --network hardhat`

##### 多网络

也可以添加其他网络，方便切换，如：sepolia
`https://hardhat.org/tutorial/deploying-to-a-live-network`

`yarn hardhat run scripts/deploy.js --network sepolia`

Infura 的多链生态系统:`https://www.infura.io/zh/networks`

本地hardhat网络，每次执行都会重置上一次的状态，不能进行下一步操作

可以通过`yarn hardhat node`启动一个本地网络，可以保存状态，跟ganache一样

##### 校验合约

以编程方式校验合约：`https://docs.etherscan.io/contract-verification/verifying-contracts-programmatically`

不过，hardhat也提供了插件`@nomicfoundation/hardhat-verify`：`https://hardhat.org/hardhat-runner/plugins/nomicfoundation-hardhat-verify`

获取ETHERSCAN_API_KEY：`https://etherscan.io/`

获取测试网RPC_URL：`https://dashboard.alchemy.com/apps`，在这里建立一个app，然后会分配对应的测试网，所有网络可以去`chainlist.org`查询，不过从hardhat的network中可以获取对应的`chainId`

安装插件后运行`yarn hardhat`发现多了`verify`命令

构建verify方法，校验合约

本地hardhat网络校验：`yarn hardhat run scripts/deploy-simple-storage.js`
sepolia网络校验：`yarn hardhat run scripts/deploy-simple-storage.js --network sepolia`，执行会报错，暂时不懂 verify 的意义，和作用???

与test3相比，test4少了编译合约的步骤，部署时更简单

##### 命令/自定义命令

`console` 命令进入node控制台 `yarn hardhat console --network xxx`就可以进入任何网络，进行书写跟 `main`函数下一致的内容（就当成一个async函数体来使用）

hardhat可以让使用者自己创建任务`https://hardhat.org/hardhat-runner/docs/advanced/create-task#creating-a-task`

1. 使用脚本：放到script中，js调用
2. 添加到命令行：执行`yarn hardhat`可以到所有命令，定义task并在`hardhat.config.js`中，可以运行`yarn hardhat block-number --network sepolia`

清除运行产物：`yarn hardhat clean`

##### 测试

chai文档：`https://www.chaijs.com/guide/styles/`

运行命令：`yarn hardhat test`

配置`gasReporter`后，运行测试命令，会得到gas的消耗，也可以输出报告
文档地址：`https://www.npmjs.com/package/hardhat-gas-reporter`

`solidity-coverage`得到测试覆盖率，运行命令：`yarn hardhat coverage`

运行：`yarn hardhat clean`可以清除artifacts和cache

##### task/scripts

task，类似于插件，方便命令行执行，更适合于稳定的功能
scripts，更灵活，更适合本地开发

##### 怎样写好一个README.md

`https://github.com/othneildrew/Best-README-Template`

##### js 转 ts

依赖库：
`yarn add --dev @typechain/ethers-v6 @typechain/hardhat @types/chai @types/node @types/mocha ts-node typechain typescript`

替换js后缀为ts

配置 `tsconfig.json`

发现在scripts下文件中导入ethers会报错，处理方式很简单：只需要把hardhat.config.ts引入全改为import即可，这是什么原因????

simpleStorage 合约类型报错，解决方式：引入 `https://github.com/dethcrypto/TypeChain`
然后在`hardhat.config.ts`中引入，并运行`yarn hardhat typechain`，会得到一个`typechain-types`文件夹

发现 await ethers.deployContract("SimpleStorage") 这里报类型错误，看怎么解决：是ethers版本不一致，改了，还是报错，把SimpeStorage类型设置为Contract不报错了，但是方法没有提示???

- 解决：发现hardhat的ethers版本为6.1.0，typechain的ethers也是6.1.0，本项目的ethers版本为6.9.0，降低项目的ethers版本为6.1.0就能使用了

执行`yarn hardhat run scripts/deploy-simple-storage.ts --network hardhat`，成功！

##### note

报错：`HardhatError: HH306: The 'address' parameter of task 'verify:etherscan' expects a value, but none was passed.` 可能因为合约地址为`undefined`

P79 done
