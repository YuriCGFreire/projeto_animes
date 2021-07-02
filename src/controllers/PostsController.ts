import {Request, Response} from "express"
import { PostsService } from "../services/PostService"
import { Validation } from "./Validation"

export class PostsController {
    async create(req: Request, res: Response): Promise<Response>{
        const { title, content, user_id } = req.body
        const postsService = new PostsService()
        const validation = new Validation()
        try{
            validation.existsOrError(title, "Titulo não informado.")
            validation.existsOrError(content, "Conteúdo não informado.")
            const post = await postsService.create({title, content, user_id})
            return res.json({post})
        }catch(err){
            res.json({"Erro: ": err})
        }
    }

    async findPostById(req: Request, res: Response): Promise<Response>{
        const { id } = req.params
        const postsService = new PostsService()
        try{
            const post = await postsService.findPostById(id)
            return res.json({"Post: ": post})
        }catch(err){
            res.json({"Erro: ": err})
        }
    }
}