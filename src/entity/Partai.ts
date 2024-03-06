import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Paslon } from "./Paslon"

@Entity()
export class Partai {

    @PrimaryGeneratedColumn()
    idPartai: number

    @Column()
    nama: string

    @Column()
    norut: number

    @Column()
    ketum: string

    @Column("simple-array")
    vismis: string[]

    @Column()
    alamat: string

    @Column()
    image: string

    @ManyToOne (() => Paslon, (paslon) => paslon.partai)
    paslon : Paslon

}