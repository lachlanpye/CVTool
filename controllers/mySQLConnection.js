var mysql = require('mysql');
var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

exports.getConnection = function (callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            return callback(err);
        }
        callback(err, conn);
    });
}