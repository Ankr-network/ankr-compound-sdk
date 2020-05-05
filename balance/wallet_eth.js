#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')
const {assetAccountID} = require('../lib/config')

compoundRequest('get', `/balance/wallet/eth/${assetAccountID}`)
    .then(console.log)
    .catch(handelErrors)