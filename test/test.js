var mocha = require('mocha');
var chai = require('chai');
var Wiki = require('../index.js');

chai.use(require("chai-as-promised"));
chai.use(require("chai-things"));


describe("pokedex", function() {
  var array,
    url = 'https://en.wikipedia.org/wiki/JavaScript',
    W = new Wiki();

  describe(".scrape()", function() {
    before(function() {
      array = W.scrape(url);
    });
    it("should return an array", function() {
      expect('test').to.be.an('array');
    });
  });
});
