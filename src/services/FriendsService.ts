import { getCustomRepository, Repository } from "typeorm"
import { FriendRepository } from "../repositories/FriendRepository"
import { Friend } from "../models/Friend"

export class FriendsService {
    
    private friendRepository: Repository<Friend>

    constructor(){
        this.friendRepository = getCustomRepository(FriendRepository)
    }

    async request(){
        
    }

}