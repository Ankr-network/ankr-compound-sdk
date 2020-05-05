#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

compoundRequest('get', '/asset-accounts')
    .then(console.log)
    .catch(handelErrors)