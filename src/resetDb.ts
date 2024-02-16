import { AppDataSource } from "./database/DataSource";
import { Book } from "./entities/Book";

export async function clearDB() {
  const runner = AppDataSource.createQueryRunner();
  await runner.query("SET session_replication_role = 'replica'");
  await Promise.all(
    AppDataSource.entityMetadatas.map(async (entity) =>
      runner.query(`ALTER TABLE "${entity.tableName}" DISABLE TRIGGER ALL`)
    )
  );
  await Promise.all(
    AppDataSource.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS "${entity.tableName}" CASCADE`)
    )
  );
  await runner.query("SET session_replication_role = 'origin'");
  await AppDataSource.synchronize();
}

async function main() {
  await AppDataSource.initialize();
  await clearDB();

  const theLordOfTheRings = Book.create({
    title: "Le seigneur des anneaux",
  });

  const asterixAndObelix = Book.create({
    title: "Astérix et Obélix",
  });

  const harryPotter = Book.create({
    title: "Harry Potter",
  });

  const kaamelott = Book.create({
    title: "Kaamelott",
  });

  await theLordOfTheRings.save();
  await asterixAndObelix.save();
  await harryPotter.save();
  await kaamelott.save();

  await AppDataSource.destroy();
  console.log("done !");
}

main();
