/* eslint-env node */
const { dependencies } = require('../package.json');

const federationConfig = {
  name: 'DesignSystem',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/components/Button'
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
};

module.exports = federationConfig;
