var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const getCoverLetter = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID + "/resumes/" + req.body.filename + ".xml");
        if (fs.existsSync(userDirPath)) {
                fs.readFile(userDirPath, function(err, data) {
                    if (!err) {
                        var json = convert.xml2js(data, { compact: true });
                        if (!Array.isArray(json['cover-letter'].tags.tag)) {
                            json['cover-letter'].tags.tag = [json['cover-letter'].tags.tag];
                        }
                        json['cover-letter'].tags.tag = json['cover-letter'].tags.tag.map(tag => {
                            return tag._text;
                        });
                        
                        res.status(200).json({
                            name: json['cover-letter'].name._text,
                            content: json['cover-letter'].content._text,
                            tags:  json['cover-letter'].tags.tag,
                            type: "coverLetter"
                        });
                    }
                });
            }
        })
}

module.exports.getCoverLetter = getCoverLetter;