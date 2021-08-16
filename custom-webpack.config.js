const { VFSPrinter } = require('vfs-printer-webpack-plugin');

module.exports = (config, options) => {
  config.plugins.push(
    new VFSPrinter({  }),
  );

  return config;
};
