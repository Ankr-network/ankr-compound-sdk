#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

acctID = process.argv[2]

compoundRequest('delete', `/asset-account/${acctID}`)
    .then(console.log)
    .catch(handelErrors)