import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Blog } from "./entity/Blog"
import { Paslon } from "./entity/Paslon"
import { Partai } from "./entity/Partai"
import { Vote } from "./entity/Vote"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "0248451842",
    database: "micro_app",
    synchronize: true,
    logging: false,
    entities: [User, Blog, Paslon, Partai, Vote],
    migrations: [],
    subscribers: [],
})
