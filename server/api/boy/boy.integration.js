'use strict';

var app = require('../..');
import request from 'supertest';

var newBoy;

describe('Boy API:', function() {

  describe('GET /api/boys', function() {
    var boys;

    beforeEach(function(done) {
      request(app)
        .get('/api/boys')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          boys = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      boys.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/boys', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/boys')
        .send({
          name: 'New Boy',
          info: 'This is the brand new boy!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newBoy = res.body;
          done();
        });
    });

    it('should respond with the newly created boy', function() {
      newBoy.name.should.equal('New Boy');
      newBoy.info.should.equal('This is the brand new boy!!!');
    });

  });

  describe('GET /api/boys/:id', function() {
    var boy;

    beforeEach(function(done) {
      request(app)
        .get('/api/boys/' + newBoy._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          boy = res.body;
          done();
        });
    });

    afterEach(function() {
      boy = {};
    });

    it('should respond with the requested boy', function() {
      boy.name.should.equal('New Boy');
      boy.info.should.equal('This is the brand new boy!!!');
    });

  });

  describe('PUT /api/boys/:id', function() {
    var updatedBoy;

    beforeEach(function(done) {
      request(app)
        .put('/api/boys/' + newBoy._id)
        .send({
          name: 'Updated Boy',
          info: 'This is the updated boy!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedBoy = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedBoy = {};
    });

    it('should respond with the updated boy', function() {
      updatedBoy.name.should.equal('Updated Boy');
      updatedBoy.info.should.equal('This is the updated boy!!!');
    });

  });

  describe('DELETE /api/boys/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/boys/' + newBoy._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when boy does not exist', function(done) {
      request(app)
        .delete('/api/boys/' + newBoy._id)
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
