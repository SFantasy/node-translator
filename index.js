// Entrance of the package
//
// Module dependencies
var request = require('request'),
    program = require('commander');

var lib = require('./lib'),
    url = require('./config').src;

module.exports = function(param) {

  program
    .version('0.1.3')
    .usage('[word to be translated]');

  program.on('--help', function() {
    console.log('  Example:');
    console.log('\n  $ ntrans professor\n');
  });

  program.parse(process.argv);

  if (param.length === 0) {
    program.help();

    return;
  }

  request(url + encodeURIComponent(param), function(err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);
      if (data.errorCode == 0) {
        lib.output(data);
      } else {
        console.error('[ERROR]'.red + ' Youdao API request error.');
      }
    }
  });
};
