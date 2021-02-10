var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID.js');

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    
    return true;
}

const submitResume = (req, res, next) => {
    if (req.files.content.name.split('.').pop() === "pdf") {
        getAccountID(req.body.email).then(value => {
            var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
            if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
            if (!fs.existsSync(path.join(userDirPath, './resumes'))) fs.mkdirSync(path.join(userDirPath, './resumes'))
            if (!fs.existsSync(path.join(userDirPath, './resumes-meta.xml'))) fs.openSync(path.join(userDirPath, './resumes-meta.xml'), 'w')

            fs.writeFile(path.join(userDirPath, './resumes/' + req.body.name + '.pdf'), req.files.content.data, function (err, data) {
                if (err) {throw err} else {
                    fs.readFile(path.join(userDirPath, './resumes-meta.xml'), function(err, data) {
                        if (err) {throw err} else {
                            let js = convert.xml2js(data, { compact: true });
                            if (isEmpty(js.resumes)) {
                                js.resumes = {
                                    resume: []
                                };
                            }
                            if (!Array.isArray(js.resumes.resume)) {
                                js.resumes.resume = [js.resumes.resume];
                            }
    
                            js.resumes.resume.push({
                                name: req.body.name,
                                tags: {
                                    tag: JSON.parse(req.body.tags)
                                }
                            });
    
                            let xml = convert.js2xml(js, {compact: true, indentAttributes: true, spaces: 1});
                            fs.writeFile(path.join(userDirPath, './resumes-meta.xml'), xml, function(err, data) { 
                                if (!err) {
                                    res.status(200).json({ data: "OK" });
                                }
                            });
                        }
                    });
                }
            });
        });
    } else {
        res.status(400).json({ data: "Only PDF files are supported."});
    }
}

module.exports.submitResume = submitResume;