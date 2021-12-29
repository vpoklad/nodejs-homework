import User from '../repository/users';

const findByEmail = async email => {
  const user = await User.findOne({ email });
  return user;
};

const create = async body => {
  const user = new User(body);
  return await user.save();
};

export default { findByEmail, create };
