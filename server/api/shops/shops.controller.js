/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/shops              ->  index
 * POST    /api/shops              ->  create
 * GET     /api/shops/:id          ->  show
 * PUT     /api/shops/:id          ->  update
 * DELETE  /api/shops/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Shops = require('./shops.model');
var mongoPromise = require('mongodb-bluebird');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function saveUpdates(updates) {
  return function(entity) {
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>",entity)
    var updated = _.merge(entity, updates);
    console.log("updated is >>>>>>>>>>>>>",updated)
    return updated.saveAsync()
      .spread(updated => {
        console.log("final answer is >>>>>>>>>>>>",updated)
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.removeAsync()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

// Gets a list of Shopss
export function index(req, res) {
  Shops.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Shops from the DB
export function show(req, res) {
  Shops.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Shops in the DB
export function create(req, res) {
  Shops.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Shops in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Shops.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Shops from the DB
export function destroy(req, res) {
  Shops.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}

export function customUpdate(req,res){
  console.log("req is >>>>>>>>>>>>>",Shops.findAndModify);
/*Shops.findAndUpdateAsync(
  { "_id": req.params.id },
  { "$set": { 
        "name" :req.body.name,
        "location" :req.body.location,
        "special" : [ ],
        "mcard" : req.body.mcard
  }},
  { "new": true},
  function(err,doc) {
    if (err) throw err;
    console.log( doc );
    res.send(doc)
  }
);*/
Shops.update({_id:req.params.id},req.body,{new:true},function(err,data){
  if(err){
    res.status(500);
    res.send({message:"Some thing went wrong"})
  }else{
    res.status(200);
    res.send(data);
  }
})


}