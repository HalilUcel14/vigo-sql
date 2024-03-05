const express = require('express');
const router = express.Router();
const controller = require('../controller/login.js');

router.get('/', controller.getLogin);

router.post('/', controller.postLogin);

module.exports = router;