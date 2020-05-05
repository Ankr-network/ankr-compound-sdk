#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')
const {assetAccountID, assetAccountSecret} = require('../lib/config')

amount = process.argv[2]

const body = {
    amount,
    assetAccountID,
    assetAccountSecret
}

compoundRequest('post', `/asset/redeem/eth`, body)
    .then(console.log)
    .catch(handelErrors)