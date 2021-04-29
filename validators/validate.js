const joi = require("joi");

const validate = (schema) => {
  return (req, res, next) => {
    const keys = Object.keys(schema);
    // ["body","query"]
    // req.body <=> req["body"]
    let error = false;
    keys.forEach((key) => {
      const result = joi.object(schema[key]).validate(req[key]);
      if (result.error) {
        error = true;
      }
    });

    if (error) {
      return res.status(400).json({
        message: "invalide data provided",
      });
    }
    next();
  };
};

module.exports = validate;
