var path = require('path');
var convert = require('xml-js');
var fs = require('fs');

const deleteCoverLetter = (req, res, next) => {
    fs.unlink(path.join(__dirname, "./data/cover-letters/" + req.body.name + ".xml"), (err) => {
        if (err) console.log(err);
        res.status(200).json({
            data: "File successfully deleted"
        });
    });
}

module.exports.deleteCoverLetter = deleteCoverLetter;