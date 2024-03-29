import "reflect-metadata"
import express, { NextFunction, Request, Response } from "express"
import "express-async-errors"

import { router } from "./app/routes";

import  { AppDataSource } from "./database/data-source"

const app = express()

app.use(express.json());
app.use(router)
app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof Error) {
            return response.status(400).json({
                error: error.message
            })
        }

        return response.status(500).json({
            status: "error",
            message: "Internal Server Error"
        })
    }
)

AppDataSource.initialize().then( async () => {
    console.log("Database OK")
    app.listen(3000, () => console.log("Server is running 🚀"));
}).catch((error) => console.log(error))