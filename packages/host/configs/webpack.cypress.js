const path = require('path');

module.exports = {
  entry: {
    main: path.join(__dirname, '../src/index.js'),
  },

  output: {
    publicPath: 'auto',
  },

  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/, // add |ts
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: 3,
                },
              ],
              [
                "@babel/preset-react",
                { "runtime": "automatic", "importSource": "@emotion/react" }
              ]
            ],
            plugins: [
              [
                "@emotion/babel-plugin",
                {
                    // sourceMap is on by default but source maps are dead code eliminated in production
                    sourceMap: true,
                    autoLabel: "dev-only",
                    labelFormat: "[local]",
                    cssPropOptimization: true,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      'DesignSystem/Components': path.resolve(__dirname, '../../design-system/src/components'),
      'DesignSystem/Utils': path.resolve(__dirname, '../../design-system/src/utils'),
      'DesignSystem/Theme': path.resolve(__dirname, '../../design-system/src/theme'),
      'DesignSystem/GlobalStyle': path.resolve(__dirname, '../../design-system/src/global.style.ts'),
      'DesignSystem/Hooks': path.resolve(__dirname, '../../design-system/src/hooks'),
  
      'Films/Page': path.resolve(__dirname, '../../films/src/pages/FilmsPage/FilmsPage.tsx'),
      'Films/FilmFeaturedPage': path.resolve(__dirname, '../../films/src/pages/FilmsPage/FilmFeaturedPage.tsx'),
  
      'Host/ReduxHooks': path.resolve(__dirname, '../../host/src/redux/hooks.ts'),
      'Host/ReduxStore': path.resolve(__dirname, '../../host/src/redux/store.ts'),
      'Host/SwapiTypes': path.resolve(__dirname, '../../host/src/services/swapi/types'),
      'Host/FeaturedContainer': path.resolve(__dirname, '../../host/src/layouts/featured/FeaturedContainer/FeaturedContainer.tsx'),

    },
  },
};
