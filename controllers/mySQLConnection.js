var mysql = require('mysql');

module.exports = function () {
    var db_config = {
        host: "us-cdbr-east-03.cleardb.com",
        user: "be11422e65b2a7",
        password: "aec972fe",
        database: "heroku_bd2fdf768735b83"
    }

    var conn;
    function handleDisconnect() {
        conn = mysql.createConnection(db_config);
        conn.connect(function(err) {
            if (err) {
                console.log("Error when connecting to database.");
                setTimeout(handleDisconnect, 2000);
            }
        });
        conn.on('error', function(err) {
            if (err.code === "PROTOCOL_CONNECTION_LOST") {
                handleDisconnect(); 
                } else {
                    throw err;
                }
        });
    }

    handleDisconnect();
    return conn;
}