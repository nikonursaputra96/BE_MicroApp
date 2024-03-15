import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    idPartai: number

    @Column()
    name: string

    @Column()
    number: number

    @Column()
    chairman: string

    @Column("simple-array")
    vismis: string[]

    @Column()
    address: string

    @Column()
    image: string

    @ManyToOne (() => Paslon, (paslon) => paslon.partai)
    paslon : Paslon

}