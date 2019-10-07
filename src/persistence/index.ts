import { createConnection, Connection } from "typeorm";

export const openConnection: any = async () =>
  await createConnection({
    type: "postgres",
    database: "ddthtg0isqkvr1",
    host: "ec2-174-129-241-14.compute-1.amazonaws.com",
    port: 5432,
    username: "xmggsfcsbdzxad",
    password: "81bed0cab62e75518b6eefd1d7005181e9d896ef34a9bb5bfe2becf510520309",
    entities: [__dirname + "/../entity/*.ts"],
    migrations: [__dirname + "/../persistence/migration/*.ts"],
    logging: true,
    synchronize: false
  });
