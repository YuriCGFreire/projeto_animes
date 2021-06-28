import { genSaltSync, hashSync } from "bcrypt-nodejs"
import {Request, Response} from "express"
import {UsersService} from "../services/UsersService"

class UsersConrtoller {
    async create(req: Request, res: Response): Promise<Response>{
        try{
            const {name, email, admin, passWord} = req.body
            const encryptPassword = (password: string) => {
                const salt = genSaltSync(10)
                return hashSync(password, salt)
            }
            const password = encryptPassword(passWord)
            const usersService = new UsersService()
            const user = await usersService.create({name, email, admin, password})
            return res.json({user})
        }catch(err){
            console.log(`Erro: ${err.message}`)
        }
    }
}

export {UsersConrtoller}