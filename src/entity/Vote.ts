 import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm"
import { User } from "./User"
import { Paslon } from "./Paslon"

@Entity()
export class Vote {

    @PrimaryGeneratedColumn()
    idVote: number

    @OneToOne (() => User, (user) => user.userId)
    @JoinColumn()
    user: User

    @OneToOne (() => Paslon, (paslon) => paslon.idPaslon)
    @JoinColumn()
    paslon: Paslon

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updatedDate : Date
}