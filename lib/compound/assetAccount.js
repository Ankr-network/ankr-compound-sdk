const {compoundRequest} = require('../server')
const {encryptRSA} = require('../util')

const list = async () => compoundRequest('get', '/asset-accounts')
const remove = async assetAccountID => compoundRequest('delete', `/asset-account/${assetAccountID}`)
const create = async (encryptionKeyID, encryptionKey, ethKeyStore, ethPassword) => {
    const assetAccountKey = encryptRSA(ethKeyStore, encryptionKey)
    const assetAccountPassword = encryptRSA(ethPassword, encryptionKey)
    return compoundRequest('post', '/asset-account', {
        encryptionKeyID,
        assetAccountKey,
        assetAccountPassword
    })
}
const get = async assetAccountID => compoundRequest('get', `/asset-account/${assetAccountID}`)

module.exports = {
    list,
    remove,
    create,
    get
}