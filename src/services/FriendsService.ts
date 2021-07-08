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

    async acceptedOrRefused(){
        
    }

}