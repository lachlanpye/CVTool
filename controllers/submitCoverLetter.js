var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const submitCoverLetter = (req, res, next) => {
    var json = req.body;
    json = { "cover-letter": json };
    json["cover-letter"].tags = {
        "tag": json["cover-letter"].tags
    }

    var xml = convert.js2xml(json, {compact: true, indentAttributes: true, spaces: 1});

    fs.writeFile(path.join(__dirname, './data/cover-letters/' + req.body.name + '.xml'), xml, function(err, data) { 
        if (err) {
            throw err
        }
        else {
            res.status(200).json({ data: "OK" })
        }
    });
}

module.exports.submitCoverLetter = submitCoverLetter;