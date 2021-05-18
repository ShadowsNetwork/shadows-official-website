const fs = require('fs');
const path = require('path');
const colors = require('colors');
const ossClient = require('./lib/oss');
const { argv } = require('yargs');
const uploadSingleFile = require('./lib/uploadSingleFile');

let { sourceFile, targetDir } = argv;

if (!sourceFile || !fs.existsSync(sourceFile)) {
  console.error(colors.red('[sourceFile] 请指定要上传的文件，并确保文件存在'));
  process.exit(1);
}

if (!fs.lstatSync(sourceFile).isFile()) {
  console.error(colors.red('[sourceFile] 请传入文件名'));
  process.exit(1);
}

if (!targetDir) {
  console.error(colors.red('[targetDir] 请指定需要上传到oss的目录，并确保目录未被占用'));
  process.exit(1);
}

targetDir = targetDir.replace(/\/$/, '') + '/';

const object = targetDir + path.basename(sourceFile);

uploadSingleFile(ossClient, object, sourceFile);
