module.exports = {
  apps: [
    {
      name: "funcionalmrgiaplus-backend",
      script: "./index.js",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: 5000
      }
    }
  ]
};
