import "reflect-metadata";
import { DataSource } from "typeorm";
import env from "../env";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: env.DB_PORT,
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
  entities: ["src/entities/**/*.ts"],

  // Don't forget to set synchronize to false in production

  synchronize: true,
});
