#!//usr/local/bin/node

const {compoundRequest, handelErrors} = require('../lib/server')

compoundRequest('post', '/encryption-key')
    .then(ret => {
        console.log(ret)
        console.log('---------Separator for encryption key-------------')
        console.log(ret['encryptionKey'])
    })
    .catch(handelErrors)