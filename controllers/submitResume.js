var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

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
        fs.writeFile(path.join(__dirname, './data/resumes/' + req.body.name + '.pdf'), req.files.content.data, function (err, data) {
            if (!err) {
                fs.readFile(path.join(__dirname, './data/resumes-meta.xml'), function(err, data) {
                    if (!err) {
                        let js = convert.xml2js(data, { compact: true });
                        console.log(js);
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
                        fs.writeFile(path.join(__dirname, './data/resumes-meta.xml'), xml, function(err, data) { 
                            if (!err) {
                                res.status(200).json({ data: "OK" });
                            }
                        });
                    }
                });
            }
        });
    }
    else {
        res.status(400).json({ data: "Only PDF files are supported."});
    }
}

module.exports.submitResume = submitResume;