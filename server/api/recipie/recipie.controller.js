/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/recipies              ->  index
 * POST    /api/recipies              ->  create
 * GET     /api/recipies/:id          ->  show
 * PUT     /api/recipies/:id          ->  update
 * DELETE  /api/recipies/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
var Recipie = require('./recipie.model');

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
    var updated = _.merge(entity, updates);
    return updated.saveAsync()
      .spread(updated => {
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

// Gets a list of Recipies
export function index(req, res) {
  Recipie.findAsync()
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Gets a single Recipie from the DB
export function show(req, res) {
  Recipie.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Creates a new Recipie in the DB
export function create(req, res) {
  Recipie.createAsync(req.body)
    .then(responseWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing Recipie in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  Recipie.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(responseWithResult(res))
    .catch(handleError(res));
}

// Deletes a Recipie from the DB
export function destroy(req, res) {
  Recipie.findByIdAsync(req.params.id)
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
