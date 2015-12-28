'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var recipieCtrlStub = {
  index: 'recipieCtrl.index',
  show: 'recipieCtrl.show',
  create: 'recipieCtrl.create',
  update: 'recipieCtrl.update',
  destroy: 'recipieCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var recipieIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './recipie.controller': recipieCtrlStub
});

describe('Recipie API Router:', function() {

  it('should return an express router instance', function() {
    recipieIndex.should.equal(routerStub);
  });

  describe('GET /api/recipies', function() {

    it('should route to recipie.controller.index', function() {
      routerStub.get
        .withArgs('/', 'recipieCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/recipies/:id', function() {

    it('should route to recipie.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'recipieCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/recipies', function() {

    it('should route to recipie.controller.create', function() {
      routerStub.post
        .withArgs('/', 'recipieCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/recipies/:id', function() {

    it('should route to recipie.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'recipieCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/recipies/:id', function() {

    it('should route to recipie.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'recipieCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/recipies/:id', function() {

    it('should route to recipie.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'recipieCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
