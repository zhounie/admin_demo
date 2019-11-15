const Busboy = require('busboy')
const path = require('path')
const fs = require('fs')
const os = require('os')


const upload = (ctx) => {
    return new Promise((resolve, reject) => {
        const busboy = new Busboy({headers: ctx.headers})
        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            let saveTo = path.join(os.tmpdir(), path.basename(fieldname))
            file.pipe(fs.createWriteStream(saveTo))
        })
        busboy.on('finish', () => {
            ctx.body = {
                code: 200,
                msg: 'success'
            }
            resolve()
        })
    })
}


module.exports = upload