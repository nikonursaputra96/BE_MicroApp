import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm"
import { Partai } from "./Partai"

@Entity()
export class Paslon {

    @PrimaryGeneratedColumn()
    idPaslon: number

    @Column()
    name: string

    @Column()
    number: number

    @Column("simple-array")
    vismis: string[]

    @Column("simple-array")
    coalition: string[]

    @Column()
    image: string

    @OneToMany (() => (Partai) , (partai) => partai.paslon)
    partai: Partai[]

}
