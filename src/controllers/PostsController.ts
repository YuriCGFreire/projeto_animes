import {Request, Response} from "express"
import { PostsService } from "../services/PostService"
import { Validation } from "./Validation"

export class PostsController {
    async create(req: Request, res: Response): Promise<Response>{
        const { title, content, user_id, like, dislike} = req.body
        const postsService = new PostsService()
        const validation = new Validation()
        try{
            validation.existsOrError(title, "Titulo não informado.")
            validation.existsOrError(content, "Conteúdo não informado.")
            const post = await postsService.create({title, content, user_id, like, dislike})
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

    async findPostsByUserId(req: Request, res: Response): Promise<Response>{
        const {id} = req.params
        try{
            const postsService = new PostsService()
            const posts = await postsService.findPostsByUserId(id)
            return res.json(posts)
        }catch(err){
            res.json(err.message)
        }
    }

    async oneMorelike(req: Request, res: Response): Promise<Response>{
        const {id} = req.params
        const postsService = new PostsService()
        try{
            const post = await postsService.oneMorelike(id)
            return res.json(post)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }

    async oneLessLike(req: Request, res: Response): Promise<Response>{
        const {id} = req.params
        const postsService = new PostsService()
        try{
            const post = await postsService.oneMorelike(id)
            return res.json(post)
        }catch(err){
            res.json({"Erro: ": err.message})
        }
    }
}