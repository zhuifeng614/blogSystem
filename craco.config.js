const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#23A9F2' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel: {
    plugins: [["@babel/plugin-proposal-decorators", { legacy: true }]]
  }
};