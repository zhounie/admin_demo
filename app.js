const http = require('http')
const db = require('./db')
const main = require('./main')
const menu = require('./model/menu')

const server = http.createServer((req, res) => {
    switch(req.url) {
        case '/menu':
            switch(req.method) {
                case 'GET':
                    menu.list(req, res)
                    break;
                case 'POST':
                    menu.add(req, res)
                    break;
                case 'DELETE':
                    menu.delete(req, res)
                    break;
                case 'PUT':
                    menu.change(req, res)
                    break;
            }
            break;
    }
})
// 建表
db.query(
    `CREATE TABLE IF NOT EXISTS WORK (id INT(10) NOT NULL AUTO_INCREMENT, hours DECIMAL(5,2) DEFAULT 0, date DATE, archived INT(1) DEFAULT 0, description LONGTEXT, PRIMARY KEY(ID))`,
    function(err) {
        if(err) throw new Error(err)
        server.listen(3001, () => {
            console.log('localhost:3001');
        })
    }
)
