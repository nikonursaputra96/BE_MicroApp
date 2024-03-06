import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity()
export class Blog {

    @PrimaryGeneratedColumn()
    idBlog: number

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    date: string

    @Column("simple-array")
    content: string[]


    @ManyToOne (() => User, (user) => user.blog)
    user : User

}
