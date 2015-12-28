'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var menuCtrlStub = {
  index: 'menuCtrl.index',
  show: 'menuCtrl.show',
  create: 'menuCtrl.create',
  update: 'menuCtrl.update',
  destroy: 'menuCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var menuIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './menu.controller': menuCtrlStub
});

describe('Menu API Router:', function() {

  it('should return an express router instance', function() {
    menuIndex.should.equal(routerStub);
  });

  describe('GET /api/menus', function() {

    it('should route to menu.controller.index', function() {
      routerStub.get
        .withArgs('/', 'menuCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/menus/:id', function() {

    it('should route to menu.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'menuCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/menus', function() {

    it('should route to menu.controller.create', function() {
      routerStub.post
        .withArgs('/', 'menuCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/menus/:id', function() {

    it('should route to menu.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'menuCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/menus/:id', function() {

    it('should route to menu.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'menuCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/menus/:id', function() {

    it('should route to menu.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'menuCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
