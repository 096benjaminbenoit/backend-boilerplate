import { User } from "../entities/User";
import bcrypt from "bcrypt";
import { verifyToken } from "./jwt";

// This function will be used to hash the password.

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

// This function will be used to validate the password.

export const validatePassword = async (
  user: User,
  inputPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(inputPassword, user.password);
};

// This function will be used to get the user from the token.

export const getUser = async (token: string): Promise<User | null> => {
  if (!token) return null;

  const decodedToken = verifyToken(token);
  if (!decodedToken) return null;

  const user = await User.findOne({ where: { id: decodedToken.userId } });
  return user || null;
};
