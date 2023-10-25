# Star Wars API web Client

Welcome to the **STRAPI Web Client** made by [Romulo Bordezani](https://github.com/romulobordezani).

## Features

- Mono-repo made with Module Federation, based on Yarn and Webpack
- The page Films is a completelly isolated package, to demonstrate the integration between packages
- Modern Redux - Using Slices, RTK for Data Fetching with Cache implemmented
- Popular Views persistance on Local Storage made using [redux-persist](https://www.npmjs.com/package/redux-persist)
- Integration with the Image Bank - https://starwars-visualguide.com/ to provide accurate pictares for every resource
- Animation library [framer](https://www.framer.com/motion/) is setup up.
- Remote Type script definitions between packages, generated using [FederatedTypesPlugin](https://github.com/module-federation/typescript)
- Styles using [Emotion](https://emotion.sh/docs/introduction) and [BEM](https://getbem.com/introduction/)
- Supports Jest and Cypress 


## Next steps

- Add more unit and Cypress tests
- Internationalization with i18n 
- Provide PWA settings with service worker and manifest
- Add GitHub actions/Husky controls to prevent broken deploys 

## Demo

Available at: [swapi-client-alpha.vercel.app](https://swapi-client-alpha.vercel.app)

## Installation

```bash
npm install --global yarn
yarn
```

## Running 

Execute the following at the root: 
```bash
yarn generate-env-file
```

Run `yarn start` in root folder. This will build and serve both `host`, `films` and `design-system` on ports 3000, 4000 and 4001 respectively.

- [localhost:3000](http://localhost:3000/)
- [localhost:4000](http://localhost:4000/)
- [localhost:4000](http://localhost:40001/)


## Testing

```bash
yarn test
```

## Lint
```bash
yarn lint
```

### Running Host React Testing Library tests through Jest

This is achieved using jest's `moduleNameMapper` by telling it how to resolve remote imports.
Add Design System components at the list following the pattern bellow in the file `jest.config.js`:

```javascript
  moduleNameMapper: {
    'DesignSystem/Button': '<rootDir>/../design-system/src/components/Button',
  }
```

## Running Host Cypress Component test

Go to host service folder and run `yarn cypress` <br />
This is achieved using webpack's `resolve.alias` by telling it how to resolve remote imports.

## FederationConfig

- For more settings, you can access federationConfig from path packages/[host|films|design-system]/configs/federationConfig.js

## Initial Origin
> Bootstraped from [module-federation-examples](https://github.com/module-federation/module-federation-examples/tree/master/typescript-react-monorepo-test)