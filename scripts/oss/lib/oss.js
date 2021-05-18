const Oss = require('ali-oss');
const AgentKeepAlive = require('agentkeepalive');
const { argv } = require('yargs');

const { bucketName } = argv;

if (!bucketName) {
  console.error(colors.red('[bucket] 请指定存储区域'));
  process.exit(1);
}

const client = new Oss({
  region: 'oss-cn-hongkong',
  bucket: bucketName,
  accessKeyId: process.env.aliOssAccessKeyId,
  accessKeySecret: process.env.aliOssAccessKeySecret,
  // 600s，10分钟
  timeout: 600000,
  agent: new AgentKeepAlive({
    timeout: 600000,
  }),
});

module.exports = client;
