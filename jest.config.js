const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/'],
  
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/@mf-types/**',
    '!**/configs/**',
    '!**/cypress/**',
    '!**/public/**',
  ],
  testPathIgnorePatterns: ["dist", "cypress", "<rootDir>/packages/host/src/__tests__"]
};

module.exports = config;
