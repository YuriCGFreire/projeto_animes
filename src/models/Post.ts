import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm"
import {User} from "./User"
import {v4 as uuid} from "uuid"

@Entity("posts")
export class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: Text;

    @ManyToOne(type => User, type => Post)
    user: User;

    @Column()
    like: number;

    @Column()
    dislike: number;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}