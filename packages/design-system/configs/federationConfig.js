/* eslint-env node */
const { dependencies } = require('../package.json');

const federationConfig = (HOST_URL) => {
  return {
    name: 'DesignSystem',
    filename: 'remoteEntry.js',
    exposes: {
      './Components': './src/components',
      './Theme': './src/theme',
      './GlobalStyle': './src/global.style.ts',
      './Utils': './src/utils',
      './Hooks': './src/hooks'
    },
    remotes: {
      Host: `Host@${HOST_URL}/remoteEntry.js`
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
      'react-router-dom': {
        singleton: true,
        requiredVersion: dependencies['react-router-dom']
      },
      "@emotion/react": {
        singleton: true,
        requiredVersion: dependencies["@emotion/react"],
      }
    }
  }
};

module.exports = federationConfig;
