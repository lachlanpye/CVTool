var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getCoverLetterList = (req, res, next) => {
    fs.readdir(path.join(__dirname, './data/cover-letters'), function(err, filenames) {
        if (!err) {
            res.status(200).json(filenames);
        }
    });
}

module.exports.getCoverLetterList = getCoverLetterList;