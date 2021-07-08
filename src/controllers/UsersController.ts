import { genSaltSync, hashSync } from "bcrypt-nodejs"
import {Request, Response} from "express"
import {UsersService} from "../services/UsersService"
import {Validation} from "./Validation"

class UsersConrtoller {
    async create(req: Request, res: Response): Promise<Response>{
        var {name, email, admin = false, bodyPassword, bodyConfirmPassword} = req.body
        const usersService = new UsersService()
        const validation = new Validation()
        const encryptPassword = (password: string) => {
            const salt = genSaltSync(10)
            return hashSync(password, salt)
        }
        const password = encryptPassword(bodyPassword)
        try{
            validation.existsOrError(name, "Nome inválido.")
            validation.existsOrError(email, "Email inválido.")
            validation.existsOrError(bodyPassword, "Senha inválida.")
            validation.existsOrError(bodyConfirmPassword, "Confirmação de senha inválida.")
            validation.equalsOrError(bodyPassword, bodyConfirmPassword, "Senhas não conferem")
            const user = await usersService.create({name, email, admin, password})
            return res.json({user})
        }catch(err){
            res.json({"Erro": err})
        }
    }

    async findByEmail(req: Request, res: Response): Promise<Response>{
        const { email } = req.params
        const usersService = new UsersService()
        try{
            const user = await usersService.findByEmail(email)
            return res.json({"User: ": {
                "Name": user.name,
                "Email": user.email,
                "User_id": user.id
            }})
        }catch(err){
            res.json(err.message)
        }
    }
}

export {UsersConrtoller}