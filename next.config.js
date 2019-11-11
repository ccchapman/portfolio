module.exports = {
  webpack: (config, { isServer }) => {
    const patchedConfig = config;

    // Fixes npm packages that depend on browser variables
    if (!isServer) {
      patchedConfig.node = {
        animejs: 'empty',
        fs: 'empty',
      };
    }

    return patchedConfig;
  },
};
