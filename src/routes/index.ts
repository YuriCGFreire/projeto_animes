import { Router } from "express";
import { userRouter } from "./userRouter";
const routes = Router()

routes.use('/users', userRouter)

export {routes}