const nodeRSA = require('node-rsa')

const encryptRSA = (text, priKey) => {
    const key = new nodeRSA()
    key.importKey(priKey, 'pkcs1-private-pem')
    return key.encryptPrivate(text, 'base64')
}

module.exports = {
    encryptRSA
}