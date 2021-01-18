var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const addTag = (req, res, next) => {
    fs.readFile(path.join(__dirname, './data/tags.xml'), function(err, data) {
        if (!err) {
            let json = convert.xml2js(data, {compact: true});
            let tagArray = [];
            json.tags.tag.forEach(element => {
                tagArray.push(element["_text"]);
            });

            let index = tagArray.indexOf(req.body.tag);
            if (index === -1) {
                json.tags.tag.push({ _text: req.body.tag });
                var xml = convert.js2xml(json, {compact: true, indentAttributes: true, spaces: 1});

                fs.writeFile(path.join(__dirname, './data/tags.xml'), xml, function(err, data) {if (err) { throw err; }})
            }
            
            res.status(200).json({ data: "OK!" });
        }
    });
}

module.exports.addTag = addTag;