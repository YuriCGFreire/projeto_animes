import {Request, Response} from "express"
import {UsersService} from "../services/UsersService"

class UsersConrtoller {
    async create(req: Request, res: Response): Promise<Response>{
        try{
            const {name, email, admin, password} = req.body
            const usersService = new UsersService()
            const user = usersService.create(name, email, admin, password)
            return res.json(user)
        }catch(err){
            return res.json(err)
        }
    }
}

export {UsersConrtoller}