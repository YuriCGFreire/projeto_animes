import { Router } from "express";
import { PostsController } from "../controllers/PostsController";
const postRouter = Router();
const postController = new PostsController();

postRouter.post('/', postController.create);
postRouter.get('/:id', postController.findPostById);
postRouter.get('/user/:id', postController.findPostsByUserId);
/* postRouter.put('/like/:id', postController.oneMorelike)
postRouter.put('/like/:id', postController.oneLessLike) */


export {postRouter};