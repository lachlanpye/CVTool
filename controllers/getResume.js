var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

var getAccountID = require('./getAccountID');

const getResume = (req, res, next) => {
    getAccountID(req.body.email).then(value => {
        var userDirPath = path.join(__dirname, './data/uuid_' + value.ID);
        if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath)
        if (!fs.existsSync(path.join(userDirPath, './resumes'))) fs.mkdirSync(path.join(userDirPath, './resumes'))

        userDirPath = path.join(userDirPath, './resumes/' + req.body.filename + ".pdf");
        if (fs.existsSync(userDirPath)) {
            const src = fs.createReadStream(userDirPath);
            res.writeHead(200, {
                "Content-Type": "application/pdf",
                "Content-Disposition": "attachment; filename=" + req.body.filename + ".pdf",
                "Content-Transfer-Encoding": "Binary"
            });

            src.pipe(res);
        }
    })
}

module.exports.getResume = getResume;