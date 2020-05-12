// const config = {
//     "endpoint": "http://localhost:8080",
//     "apiKeyID": "e8373cddb145d38961c7e18f165286d36eb5bf3d",
//     "apiKey": "6e917ecb37d62340eae8dd166f3ff043cdbfc640",

//     // interesting part
//     "encryptionID": "82a3b64900923db839572469833de962c109db68",
//     "ethKeyPassword": "@Ankr75867",
//     "assetAccountID": "321344988115938b7d6692ae693ca5dead88057d",
//     "assetAccountSecret": "CCIiXAKo22zQUx+D5gZJR5XxmSuM3wXl+WBfdndQJ7Gz4Fup8mQNq0tzMay9TQMg2X8fx0iGLFifNuT8+una0baSfkV7us8w+0uOGlnyGk/4XEpc3uAVdOElCQTHN8h26CaxCw4yqcybBVcFDy9O1J57qq8YqL7ySQB3spT+nLI4arfFbMBD+5IXQe+TJaoirYMr7YkZTcF8ivuZ+AoVOpMGmGc6HVBbwcf+Gqts3XON/UNpnjqRe+MBP8/y1N1coFk+MSZKTG+dbPCkGc0iquuVoFZb0mj81nZF9D7MDBzbz+Lmm7vt1+Jcn1PpPsqQjeZvigZynjpqJQ7JyXt+/g=="
// }

const config = {}
const _checkConfig = _config => {
    if (!('endpoint' in _config)) {
        throw Error("'endpoint' is requried")
    }
    if (!('apiKey' in _config)) {
        throw Error("'apiKey' is requried")
    }
}
const setConfig = _config => {
    _checkConfig(_config)
    for(let key in _config) {
        config[key] = _config[key]
    }
}
const getConfig = () => {
    _checkConfig(config)
    return Object.assign({}, config)
}

module.exports = {
    setConfig,
    getConfig
}
