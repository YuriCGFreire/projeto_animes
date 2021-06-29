import { getCustomRepository, Repository } from "typeorm"
import {UserRepository} from "../repositories/UserRepository"
import {User} from "../models/User"


interface IUserCreate{
    name: string,
    email: string,
    admin: boolean,
    password: string
}

class UsersService {
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UserRepository)
    }

    async create({name, email, admin, password}: IUserCreate){
        const userExists = await this.usersRepository.findOne({ email })
        if(userExists){
            const msg = `Usuário já cadastrado.`
            return msg
        }

        const user = this.usersRepository.create({
            name,
            email,
            admin,
            password
        })

        await this.usersRepository.save(user)
        return user 
    }

    async findByEmail(email: string){
        const emailExists = this.usersRepository.findOne({ email })
        return emailExists
    }
}

export{UsersService}