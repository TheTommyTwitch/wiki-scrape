var Wiki = require('../index.js');
var mocha = require('mocha');
var chai = require('chai');
var expect = require('chai').expect;


chai.use(require("chai-as-promised"));
chai.use(require("chai-things"));


describe("wiki", function() {
  var promise,
    url = 'https://en.wikipedia.org/wiki/JavaScript',
    W = new Wiki();

  describe(".scrape()", function() {
    before(function() {
      promise = W.scrape(url);
    });
    it("should succeed", function() {
      return promise;
    });
  });
});
