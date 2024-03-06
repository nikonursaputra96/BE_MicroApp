import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Blog } from "./Blog"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    userId: number

    @Column()
    fullname: string
    
    @Column()
    role: string

    @Column()
    alamat: string
    
    @Column()
    jeniskelamin: string

    @Column()
    username: string

    @Column()
    password: string

    @OneToMany(() => Blog, (blog) => blog.user)
    blog: Blog[]

}
