var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getCoverLetterList = (req, res, next) => {
    var promises = [];
    fs.readdir(path.join(__dirname, './data/cover-letters'), function(err, filenames) {
        if (!err) {
            filenames.forEach(file => {
                promises.push(new Promise((resolve, reject) => {
                    const filePath = path.join(__dirname, './data/cover-letters/' + file);
                    fs.readFile(filePath, (err, data) => {
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
}

module.exports.getCoverLetterList = getCoverLetterList;