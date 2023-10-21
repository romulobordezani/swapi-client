# Star Wars API web Client

Welcome to the **STRAPI Web Client** made by [Romulo Bordezani](https://github.com/romulobordezani).

> Bootstraped from [module-federation-examples](https://github.com/module-federation/module-federation-examples/)


## Installation

```bash
npm install --global yarn
yarn
```

## Running 

Run `REMOTE_URL=http://localhost:4000 yarn start` in root folder. This will build and serve both `host` and `remote` on ports 3000 and 4000 respectively.

- [localhost:3000](http://localhost:3000/)
- [localhost:4000](http://localhost:4000/)

> You can create and use an .env file in the host project to change the remote address.

Execute the following at the root: 
```bash
echo "REMOTE_URL=http://localhost:4000" > ./packages/host/.env
```

## Testing

```bash
yarn test
```

### Running Host React Testing Library tests through Jest

This is achieved using jest's moduleNameMapper by telling it how to resolve remote imports.
Add remote components at the list following the pattern bellow in the file `jest.config.js`:

```javascript
  moduleNameMapper: {
    'Remote/Button': '<rootDir>/../remote/src/components/Button',
  }
```

## Running Host Cypress Component test

Go to host service folder and run `yarn cypress`
This is achieved using webpack's `resolve.alias` by telling it how to resolve remote imports.

## FederationConfig

- For more settings, you can access federationConfig from path packages/[host or remote]/configs/federationConfig.js

