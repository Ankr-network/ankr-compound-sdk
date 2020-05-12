const ankrCompound = require('../')
const {config, compound: {info}} = ankrCompound

config.setConfig(require('./config'))

const main = async () => {
    console.log('-----------info quote dai-------------')
    const quote = await info.quote('dai')
    console.log(quote)
}

main()