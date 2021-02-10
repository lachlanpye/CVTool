var mysql = require('mysql');
var md5 = require('md5');
var conn = require('./mySQLConnection');

const confirmLogin = (req, res, next) => {
    conn.getConnection(function(err, client) {
        client.query("SELECT * FROM Accounts WHERE Email=? AND Pass=?", [req.body.email, md5(req.body.password)], function(err, result) {
            if (err) throw err;
            var found = (result.length > 0) ? true : false;
            client.release();
            res.status(200).json({ foundAccount: found });
        });
    });
}

module.exports.confirmLogin = confirmLogin;