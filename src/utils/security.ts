import { createMethodDecorator } from "type-graphql";
import { UserContext } from "../types/interfaces";

// This decorator will check if the user is authenticated to protect the resolver.
// You can modify this decorator to add more logic, such as checking if the user has the right permissions to access the resolver.

export function IsAuthenticated() {
  return createMethodDecorator<UserContext>(async ({ context }, next) => {
    if (!context.user) {
      throw new Error("Error. You must be connected.");
    }
    return next();
  });
}
