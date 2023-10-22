/* eslint-env node */
const { dependencies } = require("../package.json");

const federationConfig = (REMOTE_URL) => {
  return {
    name: "Host",
    filename: "remoteEntry.js",
    exposes: {
      './ReduxHooks': './src/redux/hooks.ts', 
      './ReduxStore': './src/redux/store.ts',
    },
    remotes: {
      DesignSystem: `DesignSystem@${REMOTE_URL}/remoteEntry.js`,
    },
    shared: {
      ...dependencies,
      react: {
        singleton: true,
        requiredVersion: dependencies["react"],
      },
      "react-dom": {
        singleton: true,
        requiredVersion: dependencies["react-dom"],
      },
    },
  };
};

module.exports = federationConfig;
