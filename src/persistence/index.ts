import { createConnection, Connection } from "typeorm";

export const openConnection: any = async () =>
  await createConnection({
    type: "postgres",
    database: "database.postgres",
    port: 5432,
    username: "password",
    password: "username",
    entities: [__dirname + "/../entity/*.ts"],
    migrations: [__dirname + "/../persistence/migration/*.ts"],
    logging: true,
    synchronize: false
  });
