const db = require('../db')

const list = (data) => {
    let sql = `SELECT * from menu`
    return new Promise((resolve, reject) => {
        db.query(sql, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const add = (data) => {
    let sql = `INSERT INTO menu (name, parent_id) VALUE(?, ?)`
    return new Promise((resolve, reject) => {
        db.query(sql, [data.name, data.parent_id||-1], (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const del = (data) => {
    let sql = `DELETE FROM	menu WHERE id=? OR parent_id=?`
    return new Promise((resolve, reject) => {
        db.query(sql, [data.id, data.id], (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const change = (data) => {
    let sql = `UPDATE menu SET name=?, parent_id=? WHERE id=?`
    return new Promise((resolve, reject) => {
        db.query(sql, [data.name, data.parent_id, data.id], (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

module.exports = {
    list,
    add,
    del,
    change
}