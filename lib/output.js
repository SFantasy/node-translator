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
  var i, obj;
  // Output
  var word = data.query,
      uk   = typeof data.basic['us-phonetic'] === 'string' ? '美音: [' + data.basic['us-phonetic'] + ']' : '',
      us   = typeof data.basic['uk-phonetic'] === 'string' ? '英音: [' + data.basic['uk-phonetic'] + ']' : '';

  console.log('\n ' + word.bold);

  if (uk && us) {
    console.log('\n ' + us + '   ' + us);
  } else if (typeof data.basic['phonetic'] == 'string') {
    console.log('\n 拼音：[' + data.basic['phonetic'] + ']');
  }

  console.log('\n ' + data.basic['explains']);
};
