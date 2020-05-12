const ankrCompound = require('../')
const {config, compound: {encryptionKey}} = ankrCompound

config.setConfig(require('./config'))

const main = async () => {
    console.log('-----------encryptionKey create-------------')
    const _encryptionKeyCreate = await encryptionKey.create()
    console.log(_encryptionKeyCreate)

    console.log('-----------encryptionKey list-------------')
    const encryptionKeys = await encryptionKey.list()
    console.log(encryptionKeys)

    console.log('-----------encryptionKey get-------------')
    const _encryptionKeyGet = await encryptionKey.get(encryptionKeys[0]['encryptionKeyID'])
    console.log(_encryptionKeyGet)

    console.log('-----------encryptionKey remove-------------')
    const ret = await encryptionKey.remove(_encryptionKeyCreate['encryptionKeyID'])
    console.log(ret)
}

main()