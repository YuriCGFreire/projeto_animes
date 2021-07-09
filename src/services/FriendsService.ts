import { getCustomRepository, Repository } from "typeorm"
import { FriendRepository } from "../repositories/FriendRepository"
import { Friend } from "../models/Friend"


export class FriendsService {
    
    private friendRepository: Repository<Friend>

    constructor(){
        this.friendRepository = getCustomRepository(FriendRepository)
    }

    async request(user_id_requester:string, user_id_requested: string){
        const request = this.friendRepository.create({
            user_id_requester,
            user_id_requested
        })

        await this.friendRepository.save(request)
        return request
    }

    async acceptedOrRefused(status: string, id:string){ //Id do convite
        const request = await this.friendRepository.findOne({id})

        if(status == "aceito"){
            request.active = true
        }

        const updatedRequest = await this.friendRepository.save({
            requester: request.user_id_requester,
            requested: request.user_id_requested,
            status: status,
            connection: request.active
        })

        return updatedRequest
    }

    async getPendetRequests(user_id_requested:string){
        const requests = await this.friendRepository.find({user_id_requested})
        return requests
    }

}