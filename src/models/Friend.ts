import {Entity, PrimaryColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn} from "typeorm"
import {v4 as uuid} from "uuid"
import { User } from "./User"

@Entity('friends')
export class Friend {

    @PrimaryColumn()
    id: string;

    @JoinColumn([{name: "user_id_requester"}, {name: "user_id_requested"}])
    @ManyToOne(type => User, type => Friend)
    user: User;

    @Column({type: "uuid"})
    user_id_requester: string;

    @Column({type: "uuid"})
    user_id_requested: string;

    @Column({type: "varchar"})
    status: string;

    @Column({type: "boolean"})
    active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }

        this.active = false
        this.status = "pendente"
    }
}