import { Request, Response} from "express";
import {CreateUserService} from "../services/CreateUserService";
import * as tty from "tty";

export class CreateUserController {
    async handle(request: Request, response: Response) {

        try {
            const { name, email, admin } = request.body

            const createUserService = new CreateUserService()

            const user = await createUserService.execute({ name, email, admin })

            return response.json(user)
        }catch (error) {
            console.error("Erro ao criar usuário:", error);
            return response.status(400).json({ error: error });
        }

    }
}