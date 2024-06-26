import Joi from 'joi';

const validateUser = (user) => {
  const schema = {
    full_name: Joi.string().min(5).trim().max(255)
      .required(),
    email: Joi.string().min(5).trim().max(255)
      .required()
      .email()
  };
  return Joi.validate(user, schema);
};

export default validateUser;
