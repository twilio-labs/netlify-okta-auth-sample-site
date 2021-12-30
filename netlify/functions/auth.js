const { getAuthHandler } = require("@twilio-labs/okta4netlify");

const config = {
  jwtSecret: "super_secret_dev_only_value",
  prodBaseUrl: "http://localhost:8888",
  // This needs to be changed to your dev account app:
  oktaUrl: "https://dev-nnnn.okta.com/home/oidc_client/abcd1234",
};

exports.handler = getAuthHandler(config);
exports.config = config;
