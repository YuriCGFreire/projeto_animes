import { Router } from "express";
import { PostsController } from "../controllers/PostsController";
const postRouter = Router();
const postController = new PostsController();

postRouter.post('/', postController.create);
postRouter.get('/:id', postController.findPostById);
postRouter.get('/user/:id', postController.findPostsByUserId);


export {postRouter};