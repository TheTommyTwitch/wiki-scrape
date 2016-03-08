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
    var data = [];

    $(body).find('#mw-content-text').children('p').each(function(i, elem) {
      data[i] = $(this).text();
    });

    return data;
  };

  return Wiki;

})();
