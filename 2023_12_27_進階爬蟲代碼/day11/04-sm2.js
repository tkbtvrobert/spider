// npm install sm-crypto --save

const sm2 = require('sm-crypto').sm2

// 1 - C1C3C2，0 - C1C2C3，默认为1
const cipherMode = 1

// 获取密钥对
let keypair = sm2.generateKeyPairHex()
let publicKey = keypair.publicKey   // 公钥
let privateKey = keypair.privateKey // 私钥

let msgString = "我爱柏汌老师"
let encryptData = sm2.doEncrypt(msgString, publicKey, cipherMode)    // 加密结果
let decryptData = sm2.doDecrypt(encryptData, privateKey, cipherMode) // 解密结果

console.log("encryptData: ", encryptData)
console.log("decryptData: ", decryptData)