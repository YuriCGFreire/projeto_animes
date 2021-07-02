import { Router } from "express";
import { PostsController } from "../controllers/PostsController";
const postRouter = Router()
const postController = new PostsController()

postRouter.post('/', postController.create)
postRouter.get('/', postController.findPostById)

export {postRouter}