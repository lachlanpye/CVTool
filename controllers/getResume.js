var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const getResume = (req, res, next) => {
    let filepath = path.join(__dirname, './data/resumes/' + req.body.filename + ".pdf");
    if (fs.existsSync(filepath)) {
        const src = fs.createReadStream(filepath);
        res.writeHead(200, {
            "Content-Type": "application/pdf",
            "Content-Disposition": "attachment; filename=" + req.body.filename + ".pdf",
            "Content-Transfer-Encoding": "Binary"
        });

        src.pipe(res);
    }
}

module.exports.getResume = getResume;