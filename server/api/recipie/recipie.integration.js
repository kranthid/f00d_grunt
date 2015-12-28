'use strict';

var app = require('../..');
import request from 'supertest';

var newRecipie;

describe('Recipie API:', function() {

  describe('GET /api/recipies', function() {
    var recipies;

    beforeEach(function(done) {
      request(app)
        .get('/api/recipies')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          recipies = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      recipies.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/recipies', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/recipies')
        .send({
          name: 'New Recipie',
          info: 'This is the brand new recipie!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newRecipie = res.body;
          done();
        });
    });

    it('should respond with the newly created recipie', function() {
      newRecipie.name.should.equal('New Recipie');
      newRecipie.info.should.equal('This is the brand new recipie!!!');
    });

  });

  describe('GET /api/recipies/:id', function() {
    var recipie;

    beforeEach(function(done) {
      request(app)
        .get('/api/recipies/' + newRecipie._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          recipie = res.body;
          done();
        });
    });

    afterEach(function() {
      recipie = {};
    });

    it('should respond with the requested recipie', function() {
      recipie.name.should.equal('New Recipie');
      recipie.info.should.equal('This is the brand new recipie!!!');
    });

  });

  describe('PUT /api/recipies/:id', function() {
    var updatedRecipie;

    beforeEach(function(done) {
      request(app)
        .put('/api/recipies/' + newRecipie._id)
        .send({
          name: 'Updated Recipie',
          info: 'This is the updated recipie!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedRecipie = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedRecipie = {};
    });

    it('should respond with the updated recipie', function() {
      updatedRecipie.name.should.equal('Updated Recipie');
      updatedRecipie.info.should.equal('This is the updated recipie!!!');
    });

  });

  describe('DELETE /api/recipies/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/recipies/' + newRecipie._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when recipie does not exist', function(done) {
      request(app)
        .delete('/api/recipies/' + newRecipie._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
