import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsers1705026924944 } from "./migrations/1705026924944-createUsers"
import { User } from "../app/entities/User";
import {CreateTags1705279296683} from "./migrations/1705279296683-CreateTags";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "docker",
    password: "docker",
    database: "nlw-6-nodejs-valoriza",
    synchronize: true,
    logging: false,
    entities: [ User ],
    migrations: [ CreateUsers1705026924944, CreateTags1705279296683 ],
    
})
