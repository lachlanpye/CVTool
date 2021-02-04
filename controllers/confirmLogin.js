var mysql = require('mysql');

const confirmLogin = (req, res, next) => {
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "a804e3zSY2SC",
        database: "CVToolDB",
        insecureAuth: true
    });

    conn.connect(function(err) {
        if (err) throw err;
        conn.query("SELECT * FROM Accounts", function(err, result) {
            if (err) throw err;
            console.log(result);
        });
      });

    res.status(200).json({ data: "OK" });
}

module.exports.confirmLogin = confirmLogin;