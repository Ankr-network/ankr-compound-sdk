const {compoundRequest} = require('../server')

const list = async () => compoundRequest('get', '/encryption-keys')
const remove = async encryptionKeyID => compoundRequest('delete', `/encryption-key/${encryptionKeyID}`)
const create = async () => compoundRequest('post', '/encryption-key')
const get = async encryptionKeyID => compoundRequest('get', `/encryption-key/${encryptionKeyID}`)

module.exports = {
    list,
    remove,
    create,
    get
}