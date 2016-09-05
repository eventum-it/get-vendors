# get-vendors
Tiny script to get an array of dependency key names from package.json
# Installation
` npm i get-vendors -D `;
# Usage
```
const getVendors = require('get-vendors');

const vendors = getVendors({
  include: [] // additional entry points to include,
  exclude: [] // specific module names to exclude
});
