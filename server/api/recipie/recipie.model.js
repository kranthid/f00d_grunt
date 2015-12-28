'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var statuses = ["true","false"]
var RecipieSchema = new mongoose.Schema({
  title: {
  	type:String,
  	required:true,
    unique: true
  },
  price: {
  	type:Number,
  	required:true
  },
  status: {
  	type:String,
  	required:true,
    enum: statuses
  },
  imageUrl: {
  	type:String
  },
  category: {
  	type:String,
  	required:true
  }
});

export default mongoose.model('Recipie', RecipieSchema);
