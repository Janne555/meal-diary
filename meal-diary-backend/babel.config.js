/**
 * Jest requires babel to run tests in typescript files 
 */

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }], '@babel/preset-typescript',
  ],
};