const { compose, concat, without, prop } = require('ramda');

module.exports = ({include, exclude}, packageJson) =>
  compose(
    concat(include),
    without(exclude),
    Object.keys,
    prop('dependencies'),
    JSON.parse
  )(packageJson);
