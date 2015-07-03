'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// var ManagerInSchema = new Schema({
//   name: String,
//   info: String,
//   active: Boolean
// });

var ManagerInSchema = new Schema({
  	author: 'String',
  	list: [
  		{check: 'Boolean', comment: 'String', img: 'String'}
  	],
  	date: { type: Date, default: Date.now },
});


module.exports = mongoose.model('ManagerIn', ManagerInSchema);