const Joi = require('joi');

const product = Joi.object().keys({
  id: Joi.string().required(),
  count: Joi.number().required()
});

const order = Joi.object().keys({
  fname: Joi.string().required(),
  lname: Joi.string().required(),
  country: Joi.string().required(),
  city: Joi.string().required(),
  address: Joi.string().required(),
  shippingType: Joi.number().required(),
  order: Joi.array().items(product).required()
});


module.exports = {
  order
};