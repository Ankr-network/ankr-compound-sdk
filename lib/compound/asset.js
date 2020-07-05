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
const claimComp = async (assetAccountID, assetAccountSecret) => {
    const body = {
        assetAccountID,
        assetAccountSecret
    }
    return compoundRequest('post', `/asset/claim/comp`, body)
}

module.exports = {
    redeemCEth: _redeem('ceth'),
    supplyEth: _supply('eth'),
    claimComp
}
