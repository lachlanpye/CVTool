const express = require('express');
const router = express.Router();

const controllers = require('./../controllers/controllers');
const getTags = require('./../controllers/getTags');

router.get('/say-something', controllers.saySomething);
router.get('/get-tags', getTags.getTags);

module.exports = router;