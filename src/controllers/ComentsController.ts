import { Request, Response } from "express"
import { ComentService } from "../services/ComentService"

export class ComentsController{

    async create(req: Request, res: Response): Promise<Response>{
        const { user_id, post_id, content } = req.body
        const comentsService = new ComentService()
        try{
            const coment = await comentsService.create({ user_id, post_id, content })
            return res.json(coment)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

}