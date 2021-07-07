import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, CreateDateColumn } from "typeorm"
import {User} from "./User"
import {v4 as uuid} from "uuid"

@Entity("posts")
export class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column({ type: "text" })
    content: string;

    @JoinColumn({ name: "user_id" })
    @ManyToOne(type => User, type => Post)
    user: User;

    @Column()
    user_id: string;

    @Column()
    like: number;

    @Column()
    dislike: number;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}