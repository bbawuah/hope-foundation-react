require('dotenv').config();
const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');

module.exports = withSass({
  webpack(config, options) {
   return config;
  },
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  }
});