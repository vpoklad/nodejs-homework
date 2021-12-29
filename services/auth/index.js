import jwt from 'jsonwebtoken';
import users from '../../repository/users';
const SECRET_KEY = process.env.JWT_SECRET_KEY;

class AuthService {
  async isUserExist(email) {
    const user = await users.findByEmail(email);
    return !!user;
  }

  async create(body) {
    const { id, name, email, subscription } = await users.create(body);
    return {
      id,
      name,
      email,
      subscription,
    };
  }
}

export default AuthService;
