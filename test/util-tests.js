const chai = require('chai')
// const shoud = chai.should()
const expect = chai.expect
const {encryptRSA} = require('../lib/util')

const privateKey = '-----BEGIN RSA PRIVATE KEY-----\nMIIEowIBAAKCAQEAhxWZsTKO2te5DFHhTkXuF1f4qG/cDfn89iqJZ66oVtsVm/M/\nsnkJSYVSwX68pM33BqubCUtUSmcp0WuySm9VHpRWQrX0nNm+cZHaccPjELAQLO33\nOopJcoTUgp1X1RbiHc54V8YSfD6tKUyO47qWLXMyeojIf6wrvhx6XAxYtQn7MKU0\nLMciL38S3yYb++humIOgmy/LsIjwYzHxwtB3y+409on9PJ3bshLqZctr08IN7iX/\nocHJz04ONaNPM7l31KA63Cac0bkE2GH9so8CriTq1Xppr40Mx84Cp6oi+XKhIWQB\n1ball6i2RaVxkjDwwTIY1A8o5kOcl7JokEkeaQIDAQABAoIBAFELRY1JLunfGPdq\nPIlwbRr2PYoYqmZ8QCcUeCGLaRXLFVjeBK437bl9UpwiRF1/8J/A3yAhYK3O3Qj2\n2x3LU78n8eTOM7bS8G5EulEc3CML7nh2QKiPhOc/CBxg9+wxcXG+iPboL/j4xX0M\noIHCVQ1pmrRnUhs/GXNStJp7EdFzDNiSnJ3i0zDLnyW6VKzvnxKjZnGkUIf49qPv\n+tHdx0TyD0lUaakdafprFLwpzKfuEwojX8w+xhObKEfjq6ODDPyjEOmrEfcsmkot\n4Kq5rzoVO6QJ879ISdDb0PXih3XeqPRf1SomS/SlzwiyieXOMKWqorQYQ6bJuOoc\n8169OQ0CgYEA2HZAIYtRPu0Lw1Rdi2zrrzDWMCnoacKNI+2sxOduZipsKiAmnoHW\nfm3Q0i0/PVP2ypWB1hbuAOVGKY1ur1XB2zsWItUHksqBD0fjfvpq89IqnHI/jQK1\njqdhj/s1QD0KjADgHFlq+QWrjAFFKMr5/AOnOSWcPpPdcN5AJbSPEBcCgYEAn8Ij\nxjWrqQrDrlTOL/s9wH2YsEmfcnceS7AsImvL2YdaDRtxtP0Gsdmi25pynV4fJHvD\nu9ma1RSajqlWuZBue8fWdLzMzz8mStNNA3i3ZhmCP3uGSPmeEP2qI6+eH4Zv9+L2\nitx1MxkGgp9ciWO8ID2EkZ/pDmlBme9AuuGb1X8CgYA9qkJOzA+TK5iERs53X8os\nmG8MPYQWTPREXfswBPYwaLlzrsERus9OKR6qIXW4lOjjgYABa3rWCnrYb5AupvGY\n8NY3ihSkPshRgBtRGynI2ACHnQx5sWHjh8+FYv0ilcEhbUZrDRYqZvEd62a2Xkyk\n/K1w3EQMl7cn5kjD9RIkdQKBgF6GB5Sm/MIv1Ee5daV+CbNynHzxkp2vTQWLXxGe\npiY2p1lJ+6UScHuaQXmdkGL75YE4mT70KWAZqLjwCJgSlMw4GPNJIgUdYBK1osOD\nEUAfp6jX9UQILTXwYFJs/im46VbJuwW+Grn4/JkcoSvJDu4kd+ORsdsM+/uQS8RG\n6GURAoGBALuGaYgSLaWHs0gTX/lXuAQ7w3XAO+5uls75HBCtGDXAbWEEeIVCf1xZ\nWhB7VI0C8n/gRj1XK0+QqMJ9z/dRXKki3F/a8aNIOvS4DTpMcftu35LFDgwe5AMt\nrjlkLzZZc/K+ORrz6ap/oC19MBs5vKEymNDKLTsgdnOG/ZElvfDA\n-----END RSA PRIVATE KEY-----'

describe("Util function", function() {
    it("encryptRSA", function() {
        const text = "hello, Ankr!"
        const encrypted = encryptRSA(text, privateKey)
        expect(encrypted).to.be.a('string')
    }).timeout(15000)
})