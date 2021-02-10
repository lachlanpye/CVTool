var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID.js');

const submitCoverLetter = (req, res, next) => {
    var json = req.body;
    json = { "cover-letter": json };
    json["cover-letter"].tags = {
        "tag": json["cover-letter"].tags
    }

    getAccountID(json["cover-letter"].email).then(value => {
            var xml = convert.js2xml(json, {compact: true, indentAttributes: true, spaces: 1});

            var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
            if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
            if (!fs.existsSync(path.join(userDirPath, './cover-letters'))) fs.mkdirSync(path.join(userDirPath, './cover-letters'))
            userDirPath = path.join(userDirPath, '/cover-letters/' + req.body.name + '.xml');

            fs.writeFile(userDirPath, xml, function(err, data) { 
                if (err) { throw err } else {
                    res.status(200).json({ data: "OK" })
                }
            });
         });
}

module.exports.submitCoverLetter = submitCoverLetter;