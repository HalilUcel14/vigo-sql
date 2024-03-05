const express = require('express');
const router = express.Router();
const controller = require('../controller/rapor.js');

router.get('/mizan', controller.getRapor);

module.exports = router;