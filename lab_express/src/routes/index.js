var express = require('express');
var router = express.Router();
const ctrl = require('../controllers/index');

// login page
router.get('/', ctrl.main)

//sign up page
router.get('/signup', ctrl.signPage)
router.post('/signup', ctrl.signProcess)

module.exports = router;
