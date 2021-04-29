const { string } = require("joi");
const joi = require("joi");

module.exports = {
  postUrl: {
    body: {
      URL: joi.string().required(),
    },
  },
};
