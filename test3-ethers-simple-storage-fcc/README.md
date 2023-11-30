
编译：`solcjs --bin --abi --include-path node_modules/  --base-path . SimpleStorage.sol`

报错：`Error: missing revert data (action="estimateGas", data=null, reason=null, transaction={ "data": `，因为安装solc版本太高，必须和solidity版本兼容

报错：`message: "the tx doesn't have the correct nonce. account has nonce of: 18 tx has nonce of: 4",`，因为区块高度错了