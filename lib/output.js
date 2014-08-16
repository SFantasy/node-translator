/**
 *
 * output.js
 *
 *
 * @author fantasy <fantasyshao@icloud.com>
 * @create 16/8/14
 * @update 16/8/14
 */
var colors = require('colors');

module.exports = function(data) {
  // Output
  var word = data.query,
      us   = typeof data.basic['us-phonetic'] === 'string' ? '美音: [' + data.basic['us-phonetic'] + ']' : '',
      uk   = typeof data.basic['uk-phonetic'] === 'string' ? '英音: [' + data.basic['uk-phonetic'] + ']' : '';

  console.log('\n ' + word.bold);

  if (uk && us) {
    console.log('\n ' + us + '   ' + uk);
  } else if (typeof data.basic['phonetic'] == 'string') {
    console.log('\n ' + '拼音'.bold.underline + '：[' + data.basic['phonetic'] + ']');
  }

  console.log('\n ' + '翻译'.bold.underline + '：' + data.basic['explains'] + '\n');
};
