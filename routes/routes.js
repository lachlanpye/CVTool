const express = require('express');
const router = express.Router();

const controllers = require('./../controllers/controllers');
const fat_controller = require('./../controllers/fat_controller');
const post_controller = require('./../controllers/post_controller');

router.get('/say-something', controllers.saySomething);
router.get('/say-hello', fat_controller.sayHello);

router.post('/say-post', post_controller.sayPost)

module.exports = router;