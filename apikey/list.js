#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

compoundRequest('get', '/api-keys')
    .then(console.log)
    .catch(handelErrors)