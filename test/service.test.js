const sinon = require('sinon');
const { expect } = require('chai');
const Service = require('../src/service');
const PrimaryRepository = require('../src/repository');
const SecondaryRepository = require('../src/secondaryRepository');

describe('Service Integration Tests with Multiple Stubs', () => {
  let service;
  let primaryRepositoryStub;
  let secondaryRepositoryStub;

  beforeEach(() => {
    primaryRepositoryStub = sinon.createStubInstance(PrimaryRepository);
    secondaryRepositoryStub = sinon.createStubInstance(SecondaryRepository);

    primaryRepositoryStub.deleteItemById = sinon.stub();

    service = new Service();
    service.primaryRepository = primaryRepositoryStub;
    service.secondaryRepository = secondaryRepositoryStub;
  });

  it('should return item from primary repository if found', () => {
    const item = { id: 1, name: 'Item 1' };
    primaryRepositoryStub.getItemById.withArgs(1).returns(item);

    const result = service.getItemById(1);

    expect(result).to.equal(item);
    expect(primaryRepositoryStub.getItemById.calledOnceWith(1)).to.be.true;
    expect(secondaryRepositoryStub.getItemById.notCalled).to.be.true;
  });

  it('should return item from secondary repository if not found in primary', () => {
    primaryRepositoryStub.getItemById.withArgs(3).returns(null);
    const item = { id: 3, name: 'Item 3' };
    secondaryRepositoryStub.getItemById.withArgs(3).returns(item);

    const result = service.getItemById(3);

    expect(result).to.equal(item);
    expect(primaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true;
    expect(secondaryRepositoryStub.getItemById.calledOnceWith(3)).to.be.true;
  });

  it('should throw an error if item is not found in both repositories', () => {
    primaryRepositoryStub.getItemById.returns(null);
    secondaryRepositoryStub.getItemById.returns(null);

    expect(() => service.getItemById(5)).to.throw('Item not found in both repositories');
    expect(primaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true;
    expect(secondaryRepositoryStub.getItemById.calledOnceWith(5)).to.be.true;
  });

  it('should remove an item by id from primary repository', () => {
    const item = { id: 1, name: 'Item 1' };

    primaryRepositoryStub.deleteItemById.withArgs(1).returns(item);

    const result = service.deleteItemById(1);

    expect(result).to.equal(item);
    expect(primaryRepositoryStub.deleteItemById.calledOnceWith(1)).to.be.true;
  });

  it('should throw an error if trying to remove an item that does not exist', () => {
    primaryRepositoryStub.deleteItemById.withArgs(5).returns(null);

    expect(() => service.deleteItemById(5)).to.throw('Item with id 5 not found');
    expect(primaryRepositoryStub.deleteItemById.calledOnceWith(5)).to.be.true;
  });
});
