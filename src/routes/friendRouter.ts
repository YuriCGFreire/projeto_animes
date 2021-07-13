import { Router } from "express";
import { FriendsController } from "../controllers/FriendsController";
const friendRouter = Router()
const friendsController = new FriendsController()

friendRouter.post('/request', friendsController.request)
friendRouter.get('/pendentrequests/:user_id', friendsController.getPendentRequests)
friendRouter.put('/pendent', friendsController.acceptedOrRefused)
friendRouter.get('/friends', friendsController.getFriends)

export {friendRouter}