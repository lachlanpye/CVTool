var path = require('path');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const downloadResume = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        let userDirPath = path.join(__dirname, './data/uuid_' + value.ID + '/resumes/' + req.body.filename + ".pdf");
        if (fs.existsSync(userDirPath)) {
            res.status(200).sendFile(userDirPath);
        }
    });
}

module.exports.downloadResume = downloadResume;