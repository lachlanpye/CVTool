const sayHello = (req, res, next) => {
    res.status(200).json({
        body: "Hello, world!"
    });
};

module.exports.sayHello = sayHello;