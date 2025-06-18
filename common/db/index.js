const mysql = require('mysql')
const dbconfig = require('./database')
// 使用连接池
var pool = mysql.createPool(dbconfig.mysql)
module.exports = {
    //调用query方法执行sql语句
    query (sql) {
        // 返回操作数据库的promise
        return new Promise((resolve, reject) => {
            // 连接数据库
            pool.getConnection(function (err, connection) {
                // 执行sql语句
                connection.query(sql, function (err, rows) {
                    // 操作失败
                    if (err) {
                        reject(err)
                    }
                    // 操作成功
                    else {
                        resolve(rows);
                    }
                    // 释放连接
                    connection.release();
                })
            })
        })
    }
}