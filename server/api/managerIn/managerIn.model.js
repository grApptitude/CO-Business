'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ManagerInSchema = new Schema({
  	author: String,
    inci: Boolean,
  	list: [
  		{title: String, comment: String, imgUrl: String }
  	],
  	date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ManagerIn', ManagerInSchema);
