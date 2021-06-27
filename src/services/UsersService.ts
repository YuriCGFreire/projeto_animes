import { getCustomRepository, Repository } from "typeorm"
import {UserRepository} from "../repositories/UserRepository"
import {User} from "../models/User"

class UsersService {
    private usersRepository: Repository<User>

    constructor(){
        this.usersRepository = getCustomRepository(UserRepository)
    }

    async create(name: string, email:string, admin: boolean, password: string){
        const userExists = await this.usersRepository.findOne({ email })
        if(userExists){
            return userExists
        }

        const user = this.usersRepository.create({
            name,
            email,
            admin,
            password
        })

        await this.usersRepository.save(user)
        return {name, email}
    }

    async findByEmail(email: string){
        const emailExists = this.usersRepository.findOne({ email })
        return emailExists
    }
}

export{UsersService}