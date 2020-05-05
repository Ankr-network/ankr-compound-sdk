#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

compoundRequest('get', '/encryption-keys')
    .then(console.log)
    .catch(handelErrors)