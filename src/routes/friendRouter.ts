import { Router } from "express";
import { FriendsController } from "../controllers/FriendsController";
const friendRouter = Router()
const friendsController = new FriendsController()

friendRouter.post('/request', friendsController.request)
friendRouter.get('/pendent', friendsController.getPendentRequests)
friendRouter.put('/pendent', friendsController.acceptedOrRefused)

export {friendRouter}