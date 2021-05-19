const fs = require('fs');
const glob = require('glob');
const colors = require('colors');
const { argv } = require('yargs');
const ossClient = require('./lib/oss');
const validateHtml = require('./lib/validateHtml');
const uploadSingleFile = require('./lib/uploadSingleFile');

let { sourceDir, targetDir } = argv;

if (!sourceDir || !fs.existsSync(sourceDir)) {
  console.error(colors.red('[sourceDir] 请指定打包文件的目录，并确保目录存在'));
  process.exit(1);
}

if (!targetDir) {
  console.error(colors.red('[targetDir] 请指定需要上传到oss的目录，并确保目录未被占用'));
  process.exit(1);
}

sourceDir = sourceDir.replace(/\/$/, '') + '/';
targetDir = targetDir.replace(/\/$/, '') + '/';

const immediatelyUploadFiles = [];
const delayUploadFiles = [];

function filterFiles(source) {
  const files = glob.sync(source + '*');

  files.forEach((file) => {
    if (fs.lstatSync(file).isDirectory()) {
      filterFiles(file + '/');
    } else {
      const object = targetDir + file.substr(sourceDir.length);

      // 确保上传过程中，不会有用户请求到最新的入口文件
      if (validateHtml(file)) {
        delayUploadFiles.push({
          object,
          file,
        });
      } else {
        immediatelyUploadFiles.push({
          object,
          file,
        });
      }
    }
  });
}

filterFiles(sourceDir);

function batchUpload(files, callback, offset = 0) {
  const LIMIT = 6;
  const batchFiles = files.slice(offset, offset + LIMIT);

  if (batchFiles.length) {
    console.log(`\n========================== Batch uploading ==========================\n`);
    Promise
    .all(batchFiles.map(({ object, file }) => uploadSingleFile(ossClient, object, file)))
    .then(() => {
      batchUpload(files, callback, offset + LIMIT);
    });
    console.log('');
  } else if (typeof callback === 'function') {
    callback();
  } else {
    console.log('\n=============================== Done ===============================\n');
  }
}

batchUpload(immediatelyUploadFiles, () => {
  batchUpload(delayUploadFiles);
});
