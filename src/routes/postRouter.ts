import { Router } from "express";
import { PostsController } from "../controllers/PostsController";
const postRouter = Router();
const postController = new PostsController();

postRouter.post('/', postController.create);
postRouter.get('/:id', postController.findPostById);
postRouter.get('/user/:id', postController.findPostsByUserId);
postRouter.put('/morelike/:id', postController.oneMorelike) //Para teste
postRouter.put('/lesslike/:id', postController.oneLessLike) //Para teste
postRouter.put('/moredislike/:id', postController.oneMoreDislike) //Para teste
postRouter.put('/lessdislike/:id', postController.oneLessDislike) //Para teste

export {postRouter};