import { Entity, PrimaryColumn, Column } from "typeorm"
import {v4 as uuid} from "uuid"

@Entity("posts")
export class Post {
    @PrimaryColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    content: Text;

    @Column()
    author_id: string;

    @Column()
    like: number;

    @Column()
    dislike: number;

    @Column()
    middle_finger: number;

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