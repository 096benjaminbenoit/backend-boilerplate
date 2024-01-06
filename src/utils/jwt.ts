import jwt from "jsonwebtoken";
import { User } from "../entities/User";

// This fill will be used to generate and verify the JWT token.

const JWT_SECRET = process.env.JWT_SECRET_KEY || "secret";

export const generateToken = (user: User): string => {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (token: string): any => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (e) {
    console.log(e);
    return null;
  }
};
