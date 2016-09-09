let transpileConfig = {
  transpileCon: function(configForm) {
    let wpConfig = {
      //consider changing the entry point
      entry: configForm.entry,
      output: { path: __dirname, filename: configForm.output },
      module: {
        loaders: [{
          test: configForm.test,
          loader: configForm.loader,
          exclude: configForm.exclude,
          query: {
            presets: configForm.presets
          }
        }]
      },
    };
    return wpConfig;
  }
}

module.exports = transpileConfig.transpileCon;