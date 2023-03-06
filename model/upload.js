const pool = require('../config/database')

var upload = {
    insertImage:function (data, callback) {
        return pool.query("INSERT INTO banner (image) VALUES (?)", [data], callback)
    }
}

module.exports = upload