const sayPost = (req, res, next) => {
    res.status(200).json({
        body: req.body.message
    });
};

module.exports.sayPost = sayPost;