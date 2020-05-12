const ankrCompound = require('../')
const {
    config, 
    compound: {
        encryptionKey, 
        assetAccount,
        balance,
        asset
    },
    
} = ankrCompound

config.setConfig(require('./config'))

const main = async () => {
    console.log('-----------encryptionKey create-------------')
    const _encryptionKeyCreate = await encryptionKey.create()
    console.log(_encryptionKeyCreate)

    console.log('-----------assetAccount create-------------')
    const _assetAccountCreate = await assetAccount.create(
        _encryptionKeyCreate.encryptionKeyID,
        _encryptionKeyCreate.encryptionKey,
        ethKeyStore,
        ethPassword
    )
    console.log(_assetAccountCreate)

    console.log('-----------balance wallet eth-------------')
    const walletEth = await balance.walletEth(_assetAccountCreate['assetAccountID'])
    console.log(walletEth)

    console.log('-----------balance wallet ceth-------------')
    const walletCEth = await balance.walletCEth(_assetAccountCreate['assetAccountID'])
    console.log(walletCEth)

    console.log('-----------balance protocol eth-------------')
    const protocolEth = await balance.protocolEth(_assetAccountCreate['assetAccountID'])
    console.log(protocolEth)

    // console.log('-----------asset supply eth-------------')
    // const supplyEth = await asset.supplyEth(
    //     _assetAccountCreate['assetAccountID'],
    //     _assetAccountCreate['assetAccountSecret'],
    //     0.5
    // )
    // console.log(supplyEth)

    // console.log('-----------asset redeem eth-------------')
    // const redeemEth = await asset.redeemCEth(
    //     _assetAccountCreate['assetAccountID'],
    //     _assetAccountCreate['assetAccountSecret'],
    //     0.5
    // )
    // console.log(redeemEth)

    console.log('-----------assetAccount remove-------------')
    const retAssetAccount = await assetAccount.remove(_assetAccountCreate['assetAccountID'])
    console.log(retAssetAccount)

    console.log('-----------encryptionKey remove-------------')
    const retEncryptionKey = await encryptionKey.remove(_encryptionKeyCreate['encryptionKeyID'])
    console.log(retEncryptionKey)
}

const {ethKeyStore, ethPassword} = require('./.account')

main()