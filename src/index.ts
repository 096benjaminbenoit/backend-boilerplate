import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { BookResolver } from "./resolvers/BookResolver";
import { startStandaloneServer } from "@apollo/server/standalone";
import { ApolloServer } from "@apollo/server";
import { AppDataSource } from "./database/DataSource";

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection ok");
  })
  .catch((error) => console.log(error));

buildSchema({ resolvers: [BookResolver] }).then((schema) => {
  const server = new ApolloServer({ schema });
  startStandaloneServer(server, {
    listen: { port: 4000 },
  }).then(({ url }) => {
    console.log(`server ready on ${url}`);
  });
});
