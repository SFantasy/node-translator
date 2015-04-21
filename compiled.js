'use strict';

var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

// Module dependencies

var _request = require('request');

var _request2 = _interopRequireWildcard(_request);

var _program = require('commander');

var _program2 = _interopRequireWildcard(_program);

var _lib = require('./lib');

var _lib2 = _interopRequireWildcard(_lib);

var _config = require('./config');

var _config2 = _interopRequireWildcard(_config);

var _pkg = require('./package.json');

var _pkg2 = _interopRequireWildcard(_pkg);

'use strict';
exports['default'] = function (params) {

  _program2['default'].version(_pkg2['default'].version).usage('[word to be translated]');

  _program2['default'].on('--help', function () {
    console.log('  Example:');
    console.log('\n  $ ntrans professor\n');
  });

  _program2['default'].parse(process.argv);

  if (params.length === 0) {
    _program2['default'].help();

    return;
  }

  _request2['default'](_config2['default'].src + encodeURIComponent(params), function (err, res, body) {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);

      if (data.errorCode == 0) {
        _lib2['default'].output(data);
      } else {
        console.log('[ERROR]'.red + ' Youdao API request error.');
      }
    } else {
      console.log('[ERROR]'.red + ' Youdao API request error.');
    }
  });
};

module.exports = exports['default'];
