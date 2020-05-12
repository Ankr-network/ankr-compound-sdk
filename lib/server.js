const axios = require('axios')
const {getConfig} = require('./config')

const instance = {}

const compoundAxios = () => {
    const {endpoint} = getConfig()
    if (!(endpoint in instance)) {
        instance[endpoint] = axios.create({
            baseURL: endpoint
        })
    }
    return instance[endpoint]
}

const compoundRequest = async (method, url, params = {}) => {
    const {apiKey} = getConfig()
    const opt = {
        method,
        url,
        headers: {
            'ankr-api-key': apiKey
        }
    }

    if (method === 'get') {
        opt['params'] = params
    } else if (method === 'post') {
        opt['data'] = params
    }
    // console.error('---------Start of Request Info-------------')
    // console.error(JSON.stringify(opt, null, '  '))
    // console.error('---------End of Request Info-------------')
    return compoundAxios()
        .request(opt)
        .then(ret => ret.data)
}

// const handelErrors = ({response: {status, data}}) => {
//     console.log(status)
//     console.log(JSON.stringify(data, null, '  '))
// }

module.exports = {
    compoundRequest,
    // handelErrors
}
