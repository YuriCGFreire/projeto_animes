import {Entity, PrimaryColumn, Column, ManyToMany, JoinTable, CreateDateColumn, UpdateDateColumn} from "typeorm"
import {v4 as uuid} from "uuid"
import { User } from "./User"

@Entity()
export class Friend {

    @PrimaryColumn()
    id: string;

    @ManyToMany(() => User)
    @JoinTable()
    user_requester: User[];

    @Column()
    user_id_requester: string;

    @Column()
    user_id_requested: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}