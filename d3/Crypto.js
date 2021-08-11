const crypto = require('crypto')

const methods = ['md5', 'sha256']

methods.forEach((method) => {
    const hash = crypto.createHash(method)

    const data = hash.update('Eric', 'utf-8')

    const gen_hash = data.digest('hex')

    console.log(`Hash(${method}): ${gen_hash}`)
})


