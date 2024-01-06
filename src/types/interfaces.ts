import { User } from "../entities/User";

// This interface will be used to define the user context.

export interface UserContext {
  user: User | null;
}
