var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/index');

router.get('/', ctrl.main)



module.exports = router;
