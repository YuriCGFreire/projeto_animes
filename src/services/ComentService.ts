import { getCustomRepository, Repository } from "typeorm"
import { ComentRepository } from "../repositories/ComentRepository"
import { Coment } from "../models/Coment"

interface IComentCreate{
    user_id: string,
    post_id: string,
    content: string
}

export class ComentService {
    private comentRepository: Repository<Coment>

    constructor(){
        this.comentRepository = getCustomRepository(ComentRepository)
    }

    async create({ user_id, post_id, content }: IComentCreate){
        const coment = this.comentRepository.create({
            user_id,
            post_id,
            content
        })

        await this.comentRepository.save(coment)

        return coment
    }
}