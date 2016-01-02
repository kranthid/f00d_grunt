'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var CategorySchema = new mongoose.Schema({
  title: {
  	type:String,
  	required:true,
    unique: true
  },
  imageUrl:{
  	type:String
  }
});

export default mongoose.model('Category', CategorySchema);
