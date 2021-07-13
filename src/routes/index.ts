import { Router } from "express";
import { postRouter } from "./postRouter";
import { userRouter } from "./userRouter";
const routes = Router()

routes.use('/user', userRouter)
routes.use('/post', postRouter)

export {routes}