var mysql = require('mysql');
var md5 = require('md5');

const addAccount = (req, res, next) => {
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "a804e3zSY2SC",
        database: "CVToolDB",
        insecureAuth: true
    });

    conn.connect(function(err) {
        if (err) throw err;

        conn.query("INSERT INTO Accounts (Email, Pass) VALUES (?, ?)", [req.body.email, md5(req.body.password)], function(err, result) {
            if (err) {
                if (err.errno === 1062) {
                    res.status(400).json({ data: "Email already in use."});
                }
            } else {
                res.status(200).json({ data: "OK" });
            }
        })
      });
}

module.exports.addAccount = addAccount;