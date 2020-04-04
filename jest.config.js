const { defaults } = require('jest-config');

module.exports = {
  rootDir: '.',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testPathIgnorePatterns: ['/node_modules/'],
  testRegex: '(tests.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts'],
};