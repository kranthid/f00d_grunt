'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var boyCtrlStub = {
  index: 'boyCtrl.index',
  show: 'boyCtrl.show',
  create: 'boyCtrl.create',
  update: 'boyCtrl.update',
  destroy: 'boyCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var boyIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './boy.controller': boyCtrlStub
});

describe('Boy API Router:', function() {

  it('should return an express router instance', function() {
    boyIndex.should.equal(routerStub);
  });

  describe('GET /api/boys', function() {

    it('should route to boy.controller.index', function() {
      routerStub.get
        .withArgs('/', 'boyCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/boys/:id', function() {

    it('should route to boy.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'boyCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/boys', function() {

    it('should route to boy.controller.create', function() {
      routerStub.post
        .withArgs('/', 'boyCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/boys/:id', function() {

    it('should route to boy.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'boyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/boys/:id', function() {

    it('should route to boy.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'boyCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/boys/:id', function() {

    it('should route to boy.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'boyCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
