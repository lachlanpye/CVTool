var mysql = require('mysql');
var md5 = require('md5');

const confirmLogin = (req, res, next) => {
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "a804e3zSY2SC",
        database: "cvtooldb",
        insecureAuth: true
    });

    conn.connect(function(err) {
        if (err) throw err;
        conn.query("SELECT * FROM Accounts WHERE Email=? AND Pass=?", [req.body.email, md5(req.body.password)], function(err, result) {
            if (err) throw err;
            let flag = false;
            var data = null;
            for (let i = 0; i < result.length; i++) {
                data = Object.assign({}, result[i]);
                flag = true;
            }

            var found = (flag) ? true : false;
            res.status(200).json({ foundAccount: found });
        });
      });
}

module.exports.confirmLogin = confirmLogin;