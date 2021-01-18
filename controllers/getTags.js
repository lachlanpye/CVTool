var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getTags = (req, res, next) => {
    fs.readFile(path.join(__dirname, './data/tags.xml'), function(err, data) {
        if (!err) {
            var json = convert.xml2js(data, {compact: true});
            var tagArray = [];
            json.tags.tag.forEach(element => {
                tagArray.push(element["_text"]);
            });

            res.status(200).json({"data": tagArray});
        }
        else {
            next(err);
        }
    });
}

module.exports.getTags = getTags;