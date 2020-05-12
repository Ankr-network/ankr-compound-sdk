const {compoundRequest} = require('../server')

const _protocol = token =>  async (assetAccountID) =>  
    compoundRequest('get', `/balance/protocol/${token}/${assetAccountID}`)
const _wallet = token => async (assetAccountID) =>  
    compoundRequest('get', `/balance/wallet/${token}/${assetAccountID}`)


module.exports = {
    protocolEth: _protocol('eth'),
    walletEth: _wallet('eth'),
    walletCEth: _wallet('ceth')
}