'use strict';
// Model Dependencies
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Model ----------------------------------
var WeekSchema = new Schema({
  name: String  
});
// -----------------------------------------

module.exports = mongoose.model('Week', WeekSchema);

//var Week = mongoose.model('Week', WeekSchema);