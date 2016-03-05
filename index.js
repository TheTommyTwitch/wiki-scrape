var $ = require('cheerio');
var rp = require('request-promise');

getBody = function(url) {
  var options = {
    url: url,
  };
  return rp.get(options)
    .catch(function(error) {
      return error;
    })
    .then(function(response) {
      return response;
    });
};

var Wiki = (function() {
  function Wiki() {}

  Wiki.prototype.scrape = function(url) {
    var body = getBody(url);

  };

  return Wiki;

})();
