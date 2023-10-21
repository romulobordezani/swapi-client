const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    'DesignSystem/Button': '<rootDir>/../design-system/src/components/Button'
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)', '!**/__tests__/**/*.cy.[jt]s?(x)']
};

// eslint-disable-next-line no-undef
module.exports = config;
