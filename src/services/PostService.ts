import { getCustomRepository, Repository} from "typeorm"
import { PostRepository } from "../repositories/PostRepository"
import {Post} from "../models/Post"

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
        const post = await this.postRepository.find({id})
        return post
    }

    async findPostsByUserId(user_id: string){
        const posts = await this.postRepository.find({
            where: {user_id}
        })
        return posts
    }

    async oneMorelike(id: string){
        const post = await this.postRepository.findOne({id})

        const updatedLike =await this.postRepository.save({
                id: id,
                like: post.like + 1,
                dislike: post.dislike,
                title: post.title,
                content: post.content,
                user_id: post.user_id
            }) 

        return updatedLike
    }

    async oneLessLike(id: string){
        const post = await this.postRepository.findOne({id})

        const updatedLike =await this.postRepository.save({
                id: id,
                like: post.like - 1,
                dislike: post.dislike,
                title: post.title,
                content: post.content,
                user_id: post.user_id
            }) 

        return updatedLike
    }

    async oneMoreDislike(id: string){
        const post = await this.postRepository.findOne({id})

        const updatedDislike =await this.postRepository.save({
                id: id,
                like: post.like,
                dislike: post.dislike + 1,
                title: post.title,
                content: post.content,
                user_id: post.user_id
            }) 

        return updatedDislike
    }

    async oneLessDislike(id: string){
        const post = await this.postRepository.findOne({id})
        
        const updatedDislike =await this.postRepository.save({
                id: id,
                like: post.like,
                dislike: post.dislike - 1,
                title: post.title,
                content: post.content,
                user_id: post.user_id
            }) 

        return updatedDislike
    }

}