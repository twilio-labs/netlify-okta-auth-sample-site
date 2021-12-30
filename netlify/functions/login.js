const { getLoginHandler } = require("@twilio-labs/okta4netlify");
const { config } = require("./auth");

exports.handler = getLoginHandler(config);
