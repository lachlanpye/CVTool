var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const getCoverLetterList = (req, res, next) => {
    var promises = [];

    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './cover-letters'))) fs.mkdirSync(path.join(userDirPath, './cover-letters'))

        fs.readdir(path.join(userDirPath, './cover-letters'), function(err, filenames) {
            if (!err) {
                filenames.forEach(file => {
                    promises.push(new Promise((resolve, reject) => {
                        fs.readFile(path.join(userDirPath, './cover-letters/' + file), (err, data) => {
                            if (err) throw err;
                            var json = convert.xml2js(data, { compact: true });
                            if (!Array.isArray(json['cover-letter'].tags.tag)) {
                                json['cover-letter'].tags.tag = [json['cover-letter'].tags.tag];
                            }
                            json['cover-letter'].tags.tag = json['cover-letter'].tags.tag.map(tag => {
                                return tag._text;
                            });
    
                            resolve({
                                name: json['cover-letter'].name._text,
                                tags: json['cover-letter'].tags.tag
                            });
                        });
                    })
                )});
    
                Promise.all(promises).then(content => {
                    res.status(200).json(content); 
                });
            }
        });
    })
}

module.exports.getCoverLetterList = getCoverLetterList;