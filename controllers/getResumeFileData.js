var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const getResumeFileData = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './resumes'))) fs.mkdirSync(path.join(userDirPath, './resumes'))
        if (!fs.existsSync(path.join(userDirPath, './resumes-meta.xml'))) fs.openSync(path.join(userDirPath, './resumes-meta.xml'), 'w')

        let filepath = path.join(userDirPath, './resumes/' + req.body.filename + '.pdf');
        
        if (fs.existsSync(filepath)) {
            fs.readFile(path.join(userDirPath, './resumes-meta.xml'), function(err, data) {
                if (!err) {
                    var json = convert.xml2js(data, { compact: true });
                    
                    if (!Array.isArray(json.resumes.resume)) {
                        json.resumes.resume = [json.resumes.resume];
                    }

                    var searchableArray = json.resumes.resume.map(resume => {
                        return resume.name._text;
                    });
                    let index = searchableArray.findIndex(file => {
                        return (file === req.body.filename);
                    });
                    let file = json.resumes.resume[index];
                    
                    if (!Array.isArray(file.tags.tag)) {
                        file.tags.tag = [file.tags.tag];
                    }
                    file.tags.tag = file.tags.tag.map(tag => {
                        return tag._text;
                    });

                    res.status(200).json({
                        name: file.name._text,
                        tags: file.tags.tag
                    });
                }
            });
        }}
    );
}

module.exports.getResumeFileData = getResumeFileData;