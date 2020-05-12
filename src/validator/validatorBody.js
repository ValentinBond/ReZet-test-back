const Joi = require('joi');

module.exports = (schema) => {
  return (req, res, next) => {
    const result = Joi.validate(req.body, schema);
    if( result.error ) {
      const errorsList = {};

      result.error.details.forEach((item) => errorsList[item.context.key] = item.message);

      return res.status(400).json({
        errors: errorsList
      })
    }else {
      if(!req.value) {
        req.value = {}
      }
      req.value['body'] = result.value;
      next();
    }
  }
};