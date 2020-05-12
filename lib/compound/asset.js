const {compoundRequest} = require('../server')

const _redeem = token => async (assetAccountID, assetAccountSecret, amount) => {
    const body = {
        amount,
        assetAccountID,
        assetAccountSecret
    }
    return compoundRequest('post', `/asset/redeem/${token}`, body)
}
const _supply = token => async (assetAccountID, assetAccountSecret, amount) => {
    const body = {
        amount,
        assetAccountID,
        assetAccountSecret
    }
    return compoundRequest('post', `/asset/supply/${token}`, body)
}

module.exports = {
    redeemEth: _redeem('eth'),
    supplyEth: _supply('eth')
}
