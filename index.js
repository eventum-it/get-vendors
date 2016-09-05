const { readFileSync } = require('fs');

const getVendors = require('./getVendors');

module.exports = (
  { include = [], exclude = [] } = { include: [], exclude: [] }
) => getVendors({include, exclude}, readFileSync('package.json', 'utf-8'));
