import { Router } from "express";
import { postRouter } from "./postRouter";
import { userRouter } from "./userRouter";
import { friendRouter } from "./friendRouter";
const routes = Router()

routes.use('/user', userRouter)
routes.use('/post', postRouter)
routes.use('/friend', friendRouter)

export {routes}