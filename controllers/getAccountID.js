const util = require('util');
const mysql = require('mysql');

module.exports = async function (email) {
    var conn = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "a804e3zSY2SC",
        database: "CVToolDB",
        insecureAuth: true
    });

    return new Promise((resolve, reject) => {
        conn.query("SELECT ID FROM Accounts WHERE Email=?", email, function(err, result) {
            if (err) reject(err);

            let flag = false;
            var data = null;
            for (let i = 0; i < result.length; i++) {
                data = Object.assign({}, result[i]);
                flag = true;
            }

            if (flag) {
                resolve(data);
            } else {
                resolve(-1);
            }
        });
    })
};