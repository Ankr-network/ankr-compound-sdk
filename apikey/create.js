#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

compoundRequest('post', '/api-key')
    .then(console.log)
    .catch(handelErrors)