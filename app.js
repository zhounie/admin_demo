const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const app = new Koa()
const router = new Router()
const menu = require('./routers/menu')
const upload = require('./routers/upload')



app.use(koaBody())

router.use('/menu', menu)
router.use('/upload', upload)


app.use(router.routes())
app.listen(3000, () => {
    console.log('localhost:3000');
})


// const http = require('http')
// const db = require('./db')
// const menu = require('./model/menu')
// const upload = require('./model/upload')


// const server = http.createServer((req, res) => {
//     switch(req.url) {
//         case '/menu':
//             switch(req.method) {
//                 case 'GET':
//                     menu.list(req, res)
//                     break;
//                 case 'POST':
//                     menu.add(req, res)
//                     break;
//                 case 'DELETE':
//                     menu.delete(req, res)
//                     break;
//                 case 'PUT':
//                     menu.change(req, res)
//                     break;
//             }
//             break;
//     }
//     if (req.method === 'POST' && req.url === '/upload') {
//         upload(req, res)
//     }
// })
// // 建表
// db.query(
//     `CREATE TABLE IF NOT EXISTS WORK (id INT(10) NOT NULL AUTO_INCREMENT, hours DECIMAL(5,2) DEFAULT 0, date DATE, archived INT(1) DEFAULT 0, description LONGTEXT, PRIMARY KEY(ID))`,
//     function(err) {
//         if(err) throw new Error(err)
//         server.listen(3001, () => {
//             console.log('localhost:3001');
//         })
//     }
// )
