const {compoundRequest} = require('../server')

const quote = async (asset) => compoundRequest('get', `/info/quote/${asset}`)

module.exports = {
    quote
}