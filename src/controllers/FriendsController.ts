import {Request, Response} from "express"
import { FriendsService } from "../services/FriendsService"

export class FriendsController {

    async request(req: Request, res: Response): Promise<Response>{
        const {user_id_requester, user_id_requested} = req.body
        const friendsService = new FriendsService()
        try{
            const request = await friendsService.request(user_id_requester, user_id_requested)
            return res.json(request)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

}