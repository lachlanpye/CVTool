const util = require('util');
const mysql = require('mysql');
var conn = require('./mySQLConnection');

module.exports = async function (email) {
    return new Promise((resolve, reject) => {
        conn().query("SELECT ID FROM Accounts WHERE Email=?", email, function(err, result) {
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