'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var BoySchema = new mongoose.Schema({
  username: {
  	type:String,
  	required:true,
    unique: true
  },
   password: {
  	type:String,
  	required:true
  }
});

export default mongoose.model('Boy', BoySchema);
