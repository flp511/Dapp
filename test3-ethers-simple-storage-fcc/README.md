
编译：`solcjs --bin --abi --include-path node_modules/  --base-path . SimpleStorage.sol`

报错：`Error: missing revert data (action="estimateGas", data=null, reason=null, transaction={ "data": `，因为安装solc版本太高，必须和solidity版本兼容

报错：`message: "the tx doesn't have the correct nonce. account has nonce of: 18 tx has nonce of: 4",`，因为区块高度错了

#### evn
* 依赖 dotenv 处理 .evn
```shell
export cat=dog
echo $cat # dog
history # 控制台历史纪录
history -c # 清除history
```

#### 加密
`PRIVATE_KEY_PASSWORD=password node encryptKey.js`

#### 部署
`PRIVATE_KEY_PASSWORD=password node deploy.js`


#### 部署到真正的测试网/主网

RPC_URL在这里找：`https://dashboard.alchemy.com/apps/o5q3e0ejxm1evn22`

PRIVATE_KEY是MetaMask上seplia的账号私钥

重新部署


#### git push error
fatal: unable to access 'https://github.com/flp511/Dapp/': Failed to connect to github.com port 443 after 21069 ms: Timed out