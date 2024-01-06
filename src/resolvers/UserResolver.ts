import { Resolver, Mutation, Arg } from "type-graphql";
import { GraphQLError } from "graphql";
import { User } from "../entities/User";
import { CreateUserInput } from "../inputs/UserInput";
import { generateToken } from "../utils/jwt";
import { validatePassword } from "../utils/auth";
import bcrypt from "bcrypt";
import { LoginInput } from "../inputs/LoginInput";

@Resolver()
export class UserResolver {
  @Mutation(() => User)
  async signUp(@Arg("data", { validate: true }) data: CreateUserInput) {
    const newUser = new User();
    Object.assign(newUser, data);

    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashedPassword;

    const { id } = await newUser.save();
    return User.findOne({
      where: { id },
    });
  }

  @Mutation(() => String)
  async login(@Arg("data", { validate: true }) data: LoginInput) {
    const user = await User.findOne({ where: { email: data.email } });
    if (!user) {
      throw new GraphQLError("Invalid credentials");
    }

    const isValid = await validatePassword(user, data.password);
    if (!isValid) {
      throw new GraphQLError("Invalid credentials");
    }

    return generateToken(user);
  }

  @Mutation(() => String)
  async deleteUser(@Arg("userId") id: number) {
    const user = await User.findOne({ where: { id } });
    if (!user) throw new GraphQLError("not found");
    await user.remove();
    return "deleted";
  }
}
