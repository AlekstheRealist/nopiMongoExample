// Server Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var router = express.Router();
var Week = require('./models/Week')
var helper = require('./helper')
var username = process.env.DB_USERNAME;
var password = process.env.DB_PASSWORD;

// Database Setup
var mongoose   = require('mongoose');
mongoose.connect('mongodb://' + username + ':' + password + '@ds033116.mlab.com:33116/nopi_mongo_example');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
router.use(function(req, res, next) {
  console.log('This is the best week ever!');
  next();
});


// Port
var port = process.env.PORT || 8080;

// Router Prefixed Paths
app.use('/', router);

// API Routes
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to Weeks-API!' });
});

// Controllers Contain Routes
app.use(require('./controllers'));


// Server Started
app.listen(port);
console.log('Week API Listening On ' + port);
