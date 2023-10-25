<img src="https://raw.githubusercontent.com/romulobordezani/swapi-client/main/packages/host/src/pages/home/assets/jedi-training-ball.png" width="400" />

# Star Wars API web Client

Welcome to the **STRAPI Web Client** made by [Romulo Bordezani](https://github.com/romulobordezani).

## Features

- Mono-repo made with Module Federation, based on Yarn and Webpack
- The page Films is a completely isolated package, to demonstrate the integration between packages
- Modern Redux - Using Slices, RTK for Data Fetching with Cache implemmented
- Popular Views persistence on Local Storage made using [redux-persist](https://www.npmjs.com/package/redux-persist)
- Integration with the Image Bank - https://starwars-visualguide.com/ to provide accurate pictures for all resource types
- Animation library [framer](https://www.framer.com/motion/) set on
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
</br></br></br>

## Running 

Execute the following at the root to get a brand new .env file: 
```bash
yarn generate-env-file
```

Run `yarn start` in the root folder. This will build and serve these Federate Modules `host`,`design-system`, and `films` on ports 3000, 4000 and 4001 respectively.

> Tip: the very first run needs to generate @mf-types, so probably you need to re-run

> Tip 2: while adding new Federated components, close your browser's tab running the app before reload the command `yarn start` - seems that the hot updates are trying to get the bundle before it is generated, causing issues


</br></br></br>


### Linting
```bash
yarn lint
```
> Will ONLY check for eslint and prettier issues
---
```bash
yarn prettier-format
```
> Automatically fixes code formatting, when possible

</br></br></br>

### Cleaning up

Removes all `node_modules`, `dist` and `@mf-types` folders, to start a clean rebuild
```bash
yarn clean
```
</br></br></br>

### Testing

```bash
yarn test
```

```bash
yarn test:coverage
```
> Generates a test coverage report



####  React Testing Library tests through Jest and Module Federation

This is achieved using jest's `moduleNameMapper` by telling it how to resolve remote imports.
Add Design System components at the list following the pattern bellow in the file `jest.config.js`:

```javascript
  moduleNameMapper: {
    'DesignSystem/Components': '<rootDir>/packages/design-system/src/components',
  }
```

</br></br></br>

## Running Host Cypress Component test

Go to host service folder and run `yarn cypress` <br />
This is achieved using webpack's `resolve.alias` by telling it how to resolve remote imports.

```bash
yarn workspace host cypress
```

</br></br></br>

## FederationConfig
- For more settings, you can access federationConfig from path packages/[host|films|design-system]/configs/federationConfig.js

## Initial Bootstrap
> Bootstraped from [module-federation-examples/typescript-react-monorepo-test](https://github.com/module-federation/module-federation-examples/tree/master/typescript-react-monorepo-test)