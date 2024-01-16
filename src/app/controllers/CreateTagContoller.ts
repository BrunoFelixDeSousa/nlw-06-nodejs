import { Request, Response } from "express"
import {CreateTagService} from "../services/CreateTagService";

export class CreateTagContoller {

    async handle(request: Request, response: Response) {
        const { name } = request.body

        const creatTagService = new CreateTagService()

        const tag = await creatTagService.execute(name)

        return response.json(tag)
    }
}