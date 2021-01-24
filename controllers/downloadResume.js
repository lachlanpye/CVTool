var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const downloadResume = (req, res, next) => {
    let filepath = path.join(__dirname, './data/resumes/' + req.body.filename + ".pdf");
    if (fs.existsSync(filepath)) {
        res.status(200).sendFile(filepath);
    }
}

module.exports.downloadResume = downloadResume;