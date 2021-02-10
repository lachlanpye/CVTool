var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const deleteCoverLetter = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './cover-letter'))) fs.mkdirSync(path.join(userDirPath, './cover-letter'))

        fs.unlink(path.join(userDirPath, "./cover-letters/" + req.body.name + ".xml"), (err) => {
            if (err) console.log(err);
            res.status(200).json({
                data: "File successfully deleted"
            });
        });
    });
}

module.exports.deleteCoverLetter = deleteCoverLetter;