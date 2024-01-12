import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsers1705026924944 } from "./migrations/1705026924944-createUsers"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5434,
    username: "docker",
    password: "docker",
    database: "nlw-6-nodejs-valoriza",
    synchronize: true,
    logging: false,
    entities: [],
    migrations: [CreateUsers1705026924944],
    
})
