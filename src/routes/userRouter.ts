import {Router} from "express"
import {UsersConrtoller} from "../controllers/UsersController"
const userRouter = Router()
const usersController = new UsersConrtoller()
 
userRouter.post('/', usersController.create)

export {userRouter}