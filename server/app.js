/**
 * Main application file
 */

'use strict';

import express from 'express';
import mongoose from 'mongoose';
mongoose.Promise = require('bluebird');
import config from './config/environment';
import http from 'http';
var fs = require('fs');
var cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: 'startest24',
  api_key: '956122465756112',
  api_secret: '3tu5k889gaCfKj0-rdQm113h1qY'
});
// Connect to MongoDB
mongoose.connect(config.mongo.uri, config.mongo.options);
mongoose.connection.on('error', function(err) {
  console.error('MongoDB connection error: ' + err);
  process.exit(-1);
});

// Populate databases with sample data
if (config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var multer = require('multer');
var upload = multer()
var server = http.createServer(app);
require('./config/express')(app);
require('./routes')(app);

// Start server
function startServer() {
  server.listen(config.port, config.ip, function() {
    console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
  });
}


app.post('/cloud/upload', upload.single('file'),function(req,res){
console.log("uploading file >>>>>>");
	console.log("file is >>> ",req.file);
	res.send({message:"done"})
/*	if(req.file.size < 500000){
		if(req.file.mimetype == 'image/jpeg' ||req.file.mimetype == 'image/png' || req.file.mimetype == 'image/jpg' ){
			console.log("File path >>",req.file.path)
			cloudinary.uploader.upload('pizza.jpg',{tags:'basic_sample'})
			.then(function(image){
			  console.log("* "+image.public_id);
			  console.log("* "+image.url);
			  res.send({"status":201,"imagePath":image.url});
			})
			.catch(function(err){
			  console.log();
			  console.log("** File Upload (Promise)");
			  if (err){ console.warn(err);}
			});
		}else{
			res.send({message:"File format not supported"})
		}

	}else{
		res.send({message:"File size exceeded"});
	}*/

})
setImmediate(startServer);

// Expose app
exports = module.exports = app;
