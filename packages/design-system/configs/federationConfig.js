/* eslint-env node */
const { dependencies } = require('../package.json');

const federationConfig = (HOST_URL) => {
  return {
    name: 'DesignSystem',
    filename: 'remoteEntry.js',
    exposes: {
      './Button': './src/components/Button/Button.tsx'
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
      }
    }
  }
};

module.exports = federationConfig;
