const fs = require('fs');
const colors = require('colors');
const fileSize = require('filesize');
const validateHtml = require('./validateHtml');

function uploadSingleFile(client, object, file, options = {}) {
  const size = ` [${fileSize(fs.statSync(file).size)}]`;
  let message = `${file} => ${object}`;

  options.headers = options.headers || {};

  if (validateHtml(file)) {
    message += ` ${colors.yellow('[Cache-Control: no-cache]')}`;
    options.headers['Cache-Control'] = 'no-cache';
  }

  console.log(message);

  return client.put(object, file, options)
    .then(() => {
      console.log(colors.green('√ %s'), file + size);
    })
    .catch((err) => {
      console.error(colors.red('x %s: %j'), file + size, err);
      process.exit(2);
    });
}

module.exports = uploadSingleFile;
