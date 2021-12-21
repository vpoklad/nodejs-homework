const Joi = require('joi');

const createSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean().optional(),
});

const updateSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string().email(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
}).or('name', 'email', 'phone', 'favorite');

const validateCreate = async (req, res, next) => {
  try {
    await createSchema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).json({
      message: `Field ${err.message.replace(/"/g, '')}`,
    });
  }
  next();
};

const validateUpdate = async (req, res, next) => {
  try {
    await updateSchema.validateAsync(req.body);
  } catch (error) {
    const [{ type }] = error.details;
    if (type === 'object.unknown') {
      return res.status(400).json({ message: error.message });
    }
    return res.status(400).json({ message: `missing fields` });
  }
  next();
};

module.exports = {
  validateCreate,
  validateUpdate,
};
