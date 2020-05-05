#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

apikey = process.argv[2]
compoundRequest('delete', `/api-key/${apikey}`)
    .then(console.log)
    .catch(handelErrors)