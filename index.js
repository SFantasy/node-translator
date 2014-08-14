// Entrance of the package
//
// Module dependencies
var request = require('request');

var lib = require('./lib'),
    config = require('./config');

var url = config.src;

module.exports = function(param) {

  request(url + param, function(err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);

      console.log(data.translation[0]);
    }
  });
};