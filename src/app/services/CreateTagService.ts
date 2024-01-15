import {tagRepository} from "../repositories/tagRepository";

export class CreateTagService {

    async execute (name: string) {

        if (!name) {
            throw new Error("Incorrect name!");
        }

        const tagAlreadyExists = await tagRepository.findOneBy({
            name
        })

        if (tagAlreadyExists) {
            throw new Error("Tag already exists!");
        }

        const tag = tagRepository.create({
            name
        })

        await tagRepository.save(tag)

        return tag
    }
}