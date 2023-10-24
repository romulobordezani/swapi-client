# Star Wars API web Client

Welcome to the **STRAPI Web Client** made by [Romulo Bordezani](https://github.com/romulobordezani).

> Bootstraped from [module-federation-examples](https://github.com/module-federation/module-federation-examples/)

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

Run `yarn start` in root folder. This will build and serve both `host` and `design-system` on ports 3000 and 4000 respectively.

- [localhost:3000](http://localhost:3000/)
- [localhost:4000](http://localhost:4000/)


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

- For more settings, you can access federationConfig from path packages/[host or design-system]/configs/federationConfig.js

