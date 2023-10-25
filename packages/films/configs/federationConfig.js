/* eslint-env node */
const { dependencies } = require('../package.json');

const federationConfig = (HOST_URL, DS_URL) => {
  return {
    name: 'Films',
    filename: 'remoteEntry.js',
    exposes: {
      './Page': './src/pages/FilmsPage/FilmsPage.tsx',
      './FilmFeaturedPage': './src/pages/FilmsPage/FilmFeaturedPage.tsx'
    },
    remotes: {
      Host: `Host@${HOST_URL}/remoteEntry.js`,
      DesignSystem: `DesignSystem@${DS_URL}/remoteEntry.js`,
    },
    shared: {
      ...dependencies,
      react: {
        singleton: true,
        requiredVersion: dependencies['react']
      },
      'react-dom': {
        singleton: true,
        requiredVersion: dependencies['react-dom']
      },
      "@emotion/react": {
        singleton: true,
        requiredVersion: dependencies["@emotion/react"],
      },
      "react-router-dom": {
        singleton: true,
        requiredVersion: dependencies["react-router-dom"],
      }
    }
  }
};

module.exports = federationConfig;
