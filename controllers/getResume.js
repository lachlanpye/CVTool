var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getResume = (req, res, next) => {
    let filepath = path.join(__dirname, './data/resumes/' + req.body.filename);
    if (fs.existsSync(filepath)) {
        res.status(200).sendFile(filepath);
    }
}

module.exports.getResume = getResume;