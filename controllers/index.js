// Router Dependencies
var express = require('express');
var router = express.Router();

// Endpoints, Require Controllers ----------------

router.use('/weeks', require('./Weeks'));

// -----------------------------------------------

module.exports = router;
