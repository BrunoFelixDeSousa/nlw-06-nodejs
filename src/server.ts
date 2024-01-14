import "reflect-metadata"
import express from "express"

import { router } from "./app/routes";

import  { AppDataSource } from "./database/data-source"

const app = express()

app.use(express.json());
app.use(router)

AppDataSource.initialize().then( async () => {
    console.log("Database OK")
    app.listen(3000, () => console.log("Server is running 🚀"));
}).catch((error) => console.log(error))