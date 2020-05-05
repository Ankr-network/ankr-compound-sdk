#!//usr/local/bin/node

const fs = require('fs')
const path = require('path')
const nodeRSA = require('node-rsa')
const {compoundRequest, handelErrors} = require('../lib/server')
const {encryptionID, ethKeyPassword} = require('../lib/config')

const encryptRSA = (text, priKey) => {
    const key = new nodeRSA()
    key.importKey(priKey, 'pkcs1-private-pem')
    return key.encryptPrivate(text, 'base64')
}

// load the encryption key and ethereum account keystore file
const encryptionKeyFile = path.join(__dirname, '..', 'data', 'encryption.key')
const etheruemKeyFile = path.join(__dirname, '..', 'data', 'ethereum.key')
const encryptionKey = fs.readFileSync(encryptionKeyFile, 'utf8')
const accountKey = fs.readFileSync(etheruemKeyFile, 'utf8')

// encrypt the keystore file and password
const assetAccountKey = encryptRSA(accountKey, encryptionKey)
const assetAccountPassword = encryptRSA(ethKeyPassword, encryptionKey)

// data to transmit over Internet
const body = {
    encryptionKeyID: encryptionID,
    assetAccountKey,
    assetAccountPassword
}

compoundRequest('post', '/asset-account', body)
    .then(console.log)
    .catch(handelErrors)