const express = require('express');
const router = express.Router();
const controller = require('../controller/main.js');

router.get('/', controller.getMain);

module.exports = router;