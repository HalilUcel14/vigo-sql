const express = require('express');
const router = express.Router();
const controller = require('../../controller/rapor/ref_kod_hata.js');

router.get('/', controller.getFunction);

module.exports = router;