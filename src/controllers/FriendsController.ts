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

    async acceptedOrRefused(req: Request, res: Response): Promise<Response>{
        const {status, id_request} = req.body
        const friendsService = new FriendsService()
        try{
            const request = await friendsService.acceptedOrRefused(status, id_request)
            return res.json(request)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

    async getPendentRequests(req: Request, res: Response): Promise<Response>{
        const { user_id } = req.params
        const friendsService = new FriendsService()
        try{
            const requests = await friendsService.getPendetRequests(user_id)
            return res.json(requests)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

    async getFriends(req: Request, res: Response): Promise<Response>{
        const {user_id} = req.body
        const friendsService = new FriendsService()
        try{
            const friends = await friendsService.getFriends(user_id)
            return res.json(friends)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

}