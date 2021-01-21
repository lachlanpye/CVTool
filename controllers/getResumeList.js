var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getResumeList = (req, res, next) => {
    fs.readFile(path.join(__dirname, './data/resumes-meta.xml'), function (err, data) {
        if (!err) {
            let js = convert.xml2js(data, { compact: true });
            let nameArray = [];
            js.resumes.resume.forEach(element => {
                let tagArray = [];
                element.tags.tag.forEach(element => {
                    tagArray.push(element._text);
                })

                nameArray.push({
                    name: element.name._text,
                    tags: tagArray
                });
            });
            res.status(200).json(nameArray);
        }
    });
}

module.exports.getResumeList = getResumeList;