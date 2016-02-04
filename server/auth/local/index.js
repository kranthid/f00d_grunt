'use strict';

import express from 'express';
import passport from 'passport';
import {signToken} from '../auth.service';

var router = express.Router();

router.post('/', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    console.log("Got user details >>>",user)
    console.log("Got error >>>",err,info)
    var error = err || info;
    if (error) {
      return res.status(401).json(error);
    }
    if (!user) {
      return res.status(404).json({message: 'Something went wrong, please try again.'});
    }
    if(req.query.mapp){
      res.json({username:user.name,email:user.email,mobile:user.mobile});
    }else{
      var token = signToken(user._id, user.role);
      res.json({ token });      
    }

  })(req, res, next)
});

export default router;
