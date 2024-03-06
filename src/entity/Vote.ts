import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Paslon } from "./Paslon"

@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    idVote: number

    @OneToOne (() => User)
    @JoinColumn()
    user: User

    @OneToOne (() => Paslon)
    @JoinColumn()
    paslon: Paslon

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate : Date
}