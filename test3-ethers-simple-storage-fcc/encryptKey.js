const fs=require('fs-extra')
const {ethers}=require('ethers')
require('dotenv').config()

async function main() {
    const wallet=new ethers.Wallet(process.env.PRIVATE_KEY);
    const encyptedJsonKey=await wallet.encrypt(
        process.env.PRIVATE_KEY_PASSWORD,
    )
    console.log("🚀 ~ file: encryptKey.js:11 ~ main ~ encyptedJsonKey:", encyptedJsonKey)
    fs.writeFileSync('./.encryptedKey.json', encyptedJsonKey)
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1) // 0是一个成功代码，1或其他数字是失败代码
    })