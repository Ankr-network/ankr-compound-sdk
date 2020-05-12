const {compoundRequest} = require('../server')

const list = async () => compoundRequest('get', '/api-keys')
const remove = async apiKeyID => compoundRequest('delete', `/api-key/${apiKeyID}`)
const create = async () => compoundRequest('post', '/api-key')
const get = async apiKeyID => compoundRequest('get', `/api-key/${apiKeyID}`)

module.exports = {
    list,
    remove,
    create,
    get
}