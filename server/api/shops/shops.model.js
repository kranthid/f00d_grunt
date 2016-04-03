'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var ShopsSchema = new mongoose.Schema({
  name: String,
  location: String,
  mcard: {
  	type:Array,
  	required:true
  },
  special: {
  	type:Array,
  	required:false
  }
});

export default mongoose.model('Shops', ShopsSchema);
