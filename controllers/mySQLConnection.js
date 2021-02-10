var mysql = require('mysql');
var pool = mysql.createPool({
    host: "us-cdbr-east-03.cleardb.com",
    user: "be11422e65b2a7",
    password: "aec972fe",
    database: "heroku_bd2fdf768735b83"
});

exports.getConnection = function(callback) {
    pool.getConnection(function(err, conn) {
        if (err) {
            return callback(err);
        }
        callback(err, conn);
    });
}