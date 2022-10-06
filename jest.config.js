const esModules = ['react-native', '@react-native', 'nanoid'].join('|');

/** @type import("@types/jest").Config */
module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./jest.setup.js'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  moduleNameMapper: {
    '^nanoid(/(.*)|$)': 'nanoid$1',
  },
  modulePaths: ['<rootDir>'],
};
