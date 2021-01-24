var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const deleteResume = (req, res, next) => {
    fs.unlink(path.join(__dirname, "./data/resumes/" + req.body.name + ".pdf"), (err) => {
        if (err) console.log(err);
        fs.readFile(path.join(__dirname, "./data/resumes-meta.xml"), function(err, data) {
            var json = convert.xml2js(data, { compact: true });
            if (!Array.isArray(json.resumes.resume)) {
                json.resumes.resume = [json.resumes.resume];
            }
            var searchableArray = json.resumes.resume.map(resume => {
                return resume.name._text;
            });
            var index = searchableArray.findIndex(file => {
                return (file === req.body.name);
            });

            json.resumes.resume.splice(index, 1);

            let xml = convert.js2xml(json, {compact: true, indentAttributes: true, spaces: 1});
            fs.writeFile(path.join(__dirname, './data/resumes-meta.xml'), xml, function(err, data) { 
                if (!err) {
                    res.status(200).json({ data: "File successfully deleted" });
                }
            });
        });
    });
}

module.exports.deleteResume = deleteResume;