'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var statuses = ["false","true"]
var MenuSchema = new mongoose.Schema({
  category: {
  	type:String,
  	required:true
  },
  name: {
  	type:String,
  	required:true,
    unique: true
  },
  price:{
  	type:Number,
  	required:true
  },
  imageUrl:{
  	type:String
  },
  status: {
    type: String,
    enum: statuses,
    required:true
  }
});

export default mongoose.model('Menu', MenuSchema);
