var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    
    return true;
}

const getResumeList = (req, res, next) => {

    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './resumes'))) fs.mkdirSync(path.join(userDirPath, './resumes'))
        if (!fs.existsSync(path.join(userDirPath, './resumes-meta.xml'))) fs.openSync(path.join(userDirPath, './resumes-meta.xml'), 'w')

        fs.readFile(path.join(userDirPath, './resumes-meta.xml'), function (err, data) {
            if (!err) {
                let js = convert.xml2js(data, { compact: true });
    
                if (isEmpty(js.resumes)) {
                    js.resumes = {
                        resume: []
                    };
                }
                if (!Array.isArray(js.resumes.resume)) {
                    js.resumes.resume = [js.resumes.resume];
                }
    
                let nameArray = [];
                js.resumes.resume.forEach(element => {
                    let tagArray = [];
                    if (!Array.isArray(element.tags.tag)) {
                        element.tags.tag = [element.tags.tag];
                    }
    
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
    });
}

module.exports.getResumeList = getResumeList;