import { genSaltSync, hashSync } from "bcrypt-nodejs"
import {Request, Response} from "express"
import {UsersService} from "../services/UsersService"
import {Validation} from "./Validation"

class UsersConrtoller {
    async create(req: Request, res: Response): Promise<Response>{

        const encyrptPassword = (password: string) => {
            const salt = genSaltSync(21)
            return hashSync(password, salt)
        }

        try{
            const {name, email, admin, bodyPassword, bodyConfirmPassword} = req.body
            const validation = new Validation()

            validation.existsOrError(name, "Nome inválido")
            validation.existsOrError(email, "E-mail inválido")
            validation.existsOrError(bodyPassword, "Senha inválida")
            validation.existsOrError(bodyConfirmPassword, "Confirmação de senha inválida")
            validation.equalsOrError(bodyPassword, bodyConfirmPassword, "Senhas não conferem")

            const password = encyrptPassword(bodyPassword)
            const usersService = new UsersService()
            const user = await usersService.create({name, email, admin, password})
            return res.json({user})
        }catch(err){
            console.log(`Err: ${err.message}`)
        }
    }
}

export {UsersConrtoller}