const { getLoginHandler } = require("@twilio-labs/netlify-okta-auth");
const { config } = require("./auth");

exports.handler = getLoginHandler(config);
