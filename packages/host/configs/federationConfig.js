/* eslint-env node */
const { dependencies } = require("../package.json");

const federationConfig = (DS_URL, FILMS_URL) => {
  return {
    name: "Host",
    filename: "remoteEntry.js",
    exposes: {
      './ReduxHooks': './src/redux/hooks.ts', 
      './ReduxStore': './src/redux/store.ts',
      './SwapiTypes': './src/services/swapi/types'
    },
    remotes: {
      DesignSystem: `DesignSystem@${DS_URL}/remoteEntry.js`,
      Films: `Films@${FILMS_URL}/remoteEntry.js`
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
      "@emotion/react": {
        singleton: true,
        requiredVersion: dependencies["@emotion/react"],
      }
    },
  };
};

module.exports = federationConfig;
