var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const deleteResume = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './resumes'))) fs.mkdirSync(path.join(userDirPath, './resumes'))
        if (!fs.existsSync(path.join(userDirPath, './resumes-meta.xml'))) fs.openSync(path.join(userDirPath, './resumes-meta.xml'), 'w')

        fs.unlink(path.join(userDirPath, "./resumes/" + req.body.name + ".pdf"), (err) => {
            if (err) console.log(err);
            fs.readFile(path.join(userDirPath, "./resumes-meta.xml"), function(err, data) {
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
                fs.writeFile(path.join(userDirPath, './resumes-meta.xml'), xml, function(err, data) { 
                    if (!err) {
                        res.status(200).json({ data: "File successfully deleted" });
                    }
                });
            });
        });
    });
}

module.exports.deleteResume = deleteResume;