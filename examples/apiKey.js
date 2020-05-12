const ankrCompound = require('../')
const {config, compound: {apiKey}} = ankrCompound

config.setConfig(require('./config'))

const main = async () => {
    console.log('-----------apikey list-------------')
    const apiKeys = await apiKey.list()
    console.log(apiKeys)

    console.log('-----------apikey get-------------')
    const _apiKeyGet = await apiKey.get(apiKeys[0]['apiKeyID'])
    console.log(_apiKeyGet)

    console.log('-----------apikey create-------------')
    const _apiKeyCreate = await apiKey.create()
    console.log(_apiKeyCreate)

    console.log('-----------apikey remove-------------')
    const ret = await apiKey.remove(_apiKeyCreate['apiKeyID'])
    console.log(ret)
}

main()