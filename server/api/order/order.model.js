'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));
var statuses = ["Ordered","Coocked","On the way","Delivered"]
var OrderSchema = new mongoose.Schema({
  email: {
  	type:String,
  	required:true
  },
  contact: {
  	type:Number,
  	required:true
  },
  status: {
  	type:String,
  	required:true,
    enum: statuses
  },
  details: {
  	type:String,
  	required:true
  },
  address: {
    type:String,
    required:true
  },
  orderId: {
  	type:String
  }
},{timestamps: true});

export default mongoose.model('Order', OrderSchema);
