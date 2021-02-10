const util = require('util');
const mysql = require('mysql');
var conn = require('./mySQLConnection');

module.exports = async function (email) {
    return new Promise((resolve, reject) => {
        conn().query("SELECT ID FROM Accounts WHERE Email=?", email, function(err, result) {
            if (err) reject(err);
            if (result.length > 0) {
                resolve(Object.assign({}, result[0]));
            } else {
                resolve(-1);
            }
        });
    })
};