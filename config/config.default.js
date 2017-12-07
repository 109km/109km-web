'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1512557803348_5926';

  // add your config here
  config.middleware = [];

  config.view = {
    defaultViewEngine: 'react',
    mapping: {
      'js':'react',
      '.jsx': 'react'
    },
  };

  return config;
};
