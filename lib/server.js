const axios = require('axios')
const {endpoint, apiKey} = require('./config')

let instance = null

const compoundAxios = () => {
  if (instance === null) {
    instance = axios.create({
      baseURL: endpoint
    })
  }
  return instance
}

const compoundRequest = async (method, url, params = {}, _apiKey = null) => {
    const opt = {
        method,
        url,
        headers: {
            'ankr-api-key': _apiKey || apiKey
        }
    }

    if (method === 'get') {
        opt['params'] = params
    } else if (method === 'post') {
        opt['data'] = params
    }
    console.error('---------Start of Request Info-------------')
    console.error(JSON.stringify(opt, null, '  '))
    console.error('---------End of Request Info-------------')
    return compoundAxios()
        .request(opt)
        .then(ret => ret.data)
}

const handelErrors = ({response: {status, data}}) => {
    console.log(status)
    console.log(JSON.stringify(data, null, '  '))
}

module.exports = {
    compoundRequest,
    handelErrors
}
