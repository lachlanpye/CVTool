var mysql = require('mysql');
var fs = require('fs');
var md5 = require('md5');

var getAccountID = require('./getAccountID');

const deleteAccount = (req, res, next) => {
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "a804e3zSY2SC",
        database: "cvtooldb",
        insecureAuth: true
    });

    conn.connect(function(err) {
        if (err) { res.status(400); throw err; } else {
            conn.query("SELECT * FROM Accounts WHERE Email=? AND Pass=?", [req.body.email, md5(req.body.password)], function(err, result) {
                if (err) { res.status(400); throw err; } else {
                    if (result.length > 0) {
                        conn.query("DELETE FROM Accounts WHERE Email=? AND Pass=?", [req.body.email, md5(req.body.password)], function(err, result) {
                            if (err) { res.status(400); throw err; } else {
                                getAccountID(req.body.email).then(value => {
                                    fs.rmdir(__dirname + "./data/uuid_" + value.ID, { recursive: true }, function(err) {
                                        if (err) { res.status(400); throw err; } else {
                                            res.status(200).json({ data: "Deletion successful" });
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            });
        }
    });
}

module.exports.deleteAccount = deleteAccount;