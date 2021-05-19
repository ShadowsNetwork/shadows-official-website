function validateHtml(file) {
  return /\.html?$/.test(file);
}

module.exports = validateHtml;
