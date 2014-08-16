// Entrance of the package
//
// Module dependencies
var request = require('request');

var lib = require('./lib'),
config = require('./config');

var url = config.src;

module.exports = function(param) {
  
  if (param.length == 0) {
    console.log('[Warning]'.yellow + "Nothing to be translated");
    return;
  }

  request(url + encodeURIComponent(param), function(err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);
      if (data.errorCode == 0 && data.basic != null) {
        lib.output(data);
      } else if(data.errorCode == 0 && data.basic  == null) {
        console.log('[Warning]'.yellow + 'No translation fit for the word ' + ('[' + param + ']').red);
      } else {
        console.error('[ERROR]'.red + ' Youdao API request error.');
      }
    }
  });
};
