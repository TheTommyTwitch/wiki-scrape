var cheerio = require('cheerio');
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
    var options = {
      uri: url,
      transform: function(body) {
        return cheerio.load(body);
      }
    };

    rp(options)
      .then(function($) {
        var array = [];

        $('#mw-content-text').children().each(function(i, elem) {
          array[i] = $(this).text();
        });

        array.join(', ');
        console.log(array);
        return array;
      })
      .catch(function(err) {
        console.log(err);
      });
  };

  return Wiki;

})();

module.exports = Wiki;
