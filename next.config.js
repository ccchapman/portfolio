module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on browser variables
    if (!isServer) {
      config.node = {
        animejs: "empty",
        fs: "empty",
      }
    }

    return config;
  }
};
