import { Router } from "express";
import { FriendsController } from "../controllers/FriendsController";
const friendRouter = Router()
const friendsController = new FriendsController()

friendRouter.post('/request', friendsController.request)

export {friendRouter}