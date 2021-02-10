var mysql = require('mysql');
var conn = mysql.createConnection({
                host: "us-cdbr-east-03.cleardb.com",
                user: "be11422e65b2a7",
                password: "aec972fe",
                database: "heroku_bd2fdf768735b83"
            });

conn.connect(function(err) {
    if (err) throw err;
});

module.exports = conn;