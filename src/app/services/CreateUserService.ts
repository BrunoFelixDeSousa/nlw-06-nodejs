import { userRepository } from "../repositories/userRepository";

interface IUserRequest {
    name: string
    email: string
    admin?: boolean
}

export class CreateUserService {

    async execute( { name, email, admin } : IUserRequest) {

        if (!email) {
            throw new Error("Email incorreto")
        }

        const userAlreadyExist = await userRepository.findOneBy({
            email
        })

        if (userAlreadyExist) {
            throw new Error("Usuario já existe")
        }

        try {
            const user = userRepository.create({ name, email, admin });
            await userRepository.save(user);

            return user;
        } catch (error) {
            //console.error("Erro ao salvar usuário:", error);
            throw new Error("Erro interno ao criar usuário");
        }
    }
}