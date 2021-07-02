import { getCustomRepository, Repository } from "typeorm"
import { PostRepository } from "../repositories/PostRepository"
import { Post } from "../models/Post"

interface IPostCreate{
    title: string,
    content: string,
    user_id: string,
    like?: number,
    dislike?: number
}

export class PostsService {
    private postRepository: Repository<Post>

    constructor(){
        this.postRepository = getCustomRepository(PostRepository)
    }

    async create({title, content, user_id, like, dislike}: IPostCreate){
        const post = this.postRepository.create({
            title,
            content,
            user_id,
            like,
            dislike
        })

        await this.postRepository.save(post)
        return post
    }

    async findPostById(id: string){
        const post = this.postRepository.find({id})
        return post
    }
}