'use strict';

// Module dependencies
import request from 'request';
import program from 'commander';

import lib from './lib';
import config from './config';
import pkg from './package.json';

export default function (params) {

  program
    .version(pkg.version)
    .usage('[word to be translated]');

  program.on('--help', () => {
    console.log('  Example:');
    console.log('\n  $ ntrans professor\n');
  });

  program.parse(process.argv);

  if (params.length === 0) {
    program.help();

    return;
  }

  request(config.src + encodeURIComponent(params), (err, res, body) => {
    var data;

    if (!err && res.statusCode === 200) {
      data = JSON.parse(body);

      if (data.errorCode == 0) {
        lib.output(data);
      } else {
        console.log('[ERROR]'.red + ' Youdao API request error.');
      }
    } else {
      console.log('[ERROR]'.red + ' Youdao API request error.')
    }
  });

}
