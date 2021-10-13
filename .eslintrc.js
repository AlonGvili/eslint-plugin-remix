"use strict";

module.exports = {
  root: true,
  plugins: ["remix-route"],
  rules: {
    "remix-route/remix-route-loader-exported": 2,
    "remix-route/remix-route-action-exported": 2,
    "remix-route/remix-route-links-exported": 2,
    "remix-route/remix-route-meta-exported": 2,
  },
  extends: [
    "eslint:recommended",
    "plugin:eslint-plugin/recommended",
    "plugin:node/recommended",
  ],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ["tests/**/*.js"],
      env: { mocha: true },
    },
  ],
};
