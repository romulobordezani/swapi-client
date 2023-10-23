/* eslint-env node */
const { dependencies } = require('../package.json');

const federationConfig = (HOST_URL) => {
  return {
    name: 'DesignSystem',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/components/Button/Button.tsx',
      './Footer': './src/components/Footer/Footer.tsx',
      './Header': './src/components/Header/Header.tsx',
      './GlobalStyle': './src/global.style.ts'
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
    }
  }
};

module.exports = federationConfig;
