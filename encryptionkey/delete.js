#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

encID = process.argv[2]

compoundRequest('delete', `/encryption-key/${encID}`)
    .then(console.log)
    .catch(handelErrors)