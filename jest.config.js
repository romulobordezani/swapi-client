const config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  watchPathIgnorePatterns: ['<rootDir>/node_modules/', 'dist'],
  setupFiles: ['jest-canvas-mock', 'whatwg-fetch', '<rootDir>/testSetup.js'],
  moduleNameMapper: {
    'DesignSystem/Components': '<rootDir>/packages/design-system/src/components',
    'DesignSystem/Utils': '<rootDir>/packages/design-system/src/utils',
    'DesignSystem/Theme': '<rootDir>/packages/design-system/src/theme',
    'DesignSystem/GlobalStyle': '<rootDir>/packages/design-system/src/global.style.ts',
    'DesignSystem/Hooks': '<rootDir>/packages/design-system/src/hooks',

    'Films/Page': '<rootDir>/packages/films/src/pages/FilmsPage/FilmsPage.tsx',
    'Films/FilmFeaturedPage': '<rootDir>/packages/films/src/pages/FilmsPage/FilmFeaturedPage.tsx',

    'Host/ReduxHooks': '<rootDir>/packages/host/src/redux/hooks.ts',
    'Host/ReduxStore': '<rootDir>/packages/host/src/redux/store.ts',
    'Host/SwapiTypes': '<rootDir>/packages/host/src/services/swapi/types',
    'Host/FeaturedContainer': '<rootDir>/packages/host/src/layouts/featured/FeaturedContainer/FeaturedContainer.tsx',
  },

  
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    ".+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub",
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/@mf-types/**',
    '!**/configs/**',
    '!**/cypress/**',
    '!**/*.cy.tsx',
    '!**/.config.ts',
    '!**/public/**',
    '!**/*.style.ts',
    '!**/index.ts',
    '!**/*.d.ts',
    '!**/bootstrap.tsx'
  ],
  testPathIgnorePatterns: ["dist", "cypress", "<rootDir>/packages/host/src/__tests__"]
};

module.exports = config;
