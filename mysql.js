const mysql = require('mysql');

class MySql {
    constructor() {
        this.pool = mysql.createPool({
            host: process.env.HOST || "localhost",
            user: process.env.USER || "root",
            password: process.env.PASSWORD || "",
            database: process.env.DATABASE || "test"
        });
    }
    setDatabase(config) {
        this.pool = mysql.createPool(config);
    }
    query(statement, callback) {
        try {
            this.pool.getConnection(function (err, connection) {
                if (err) {
                    callback({
                        error: true,
                        message: err.message,
                        data: err
                    })
                    return;
                }
                connection.query(statement, function (err, results) {
                    connection.release();
                    if (err) {
                        callback({
                            error: true,
                            message: err.message,
                            data: err
                        })
                        return;
                    }
                    callback({
                        error: true,
                        message: "Success",
                        data: results
                    })
                });
            });
        } catch (err) {
            callback({
                error: true,
                message: err.message,
                data: err
            })
            return;
        }
    };
}

module.exports = MySql;