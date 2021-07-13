import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Post } from "./Post"
import { v4 as uuid } from "uuid"

@Entity("coments")
export class Coment {

    @PrimaryColumn()
    id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(type => User, type => Coment)
    user: User;

    @Column()
    user_id: string;

    @JoinColumn({ name: "post_id" })
    @ManyToOne(type => Post, type => Coment)
    post: Post;

    @Column()
    post_id: string;

    @Column({ type: "varchar", width: 200 })
    content: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }

}