import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/BookResolver";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { AppDataSource } from "./database/DataSource";
import { UserResolver } from "./resolvers/UserResolver";
import { getUser } from "./utils/auth";
import { UserContext } from "./types/interfaces";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection ok");
  })
  .catch((error) => console.log(error));

buildSchema({ resolvers: [BookResolver, UserResolver] }).then((schema) => {
  const server = new ApolloServer({ schema });
  startStandaloneServer(server, {
    context: async ({ req }): Promise<UserContext> => {
      const token = req.headers.authorization || "";
      const user = await getUser(token);
      return { user };
    },
    listen: { port: 4000 },
  }).then(({ url }) => {
    console.log(`server ready on ${url}`);
  });
});
