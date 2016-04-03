'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var shopsCtrlStub = {
  index: 'shopsCtrl.index',
  show: 'shopsCtrl.show',
  create: 'shopsCtrl.create',
  update: 'shopsCtrl.update',
  destroy: 'shopsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var shopsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './shops.controller': shopsCtrlStub
});

describe('Shops API Router:', function() {

  it('should return an express router instance', function() {
    shopsIndex.should.equal(routerStub);
  });

  describe('GET /api/shops', function() {

    it('should route to shops.controller.index', function() {
      routerStub.get
        .withArgs('/', 'shopsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/shops/:id', function() {

    it('should route to shops.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'shopsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/shops', function() {

    it('should route to shops.controller.create', function() {
      routerStub.post
        .withArgs('/', 'shopsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/shops/:id', function() {

    it('should route to shops.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'shopsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/shops/:id', function() {

    it('should route to shops.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'shopsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/shops/:id', function() {

    it('should route to shops.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'shopsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
