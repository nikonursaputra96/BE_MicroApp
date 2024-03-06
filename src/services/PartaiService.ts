import { error } from "console";
import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";
import IPartai from "../interfaces/PartaiInterface";

export default new class PartaiService {
    async create(reqBody: IPartai) : Promise<IPartai> {
        try {  

            const repository = await AppDataSource.getRepository(Partai)

            const partai = repository.create ({
                idPartai: reqBody.idPartai,
                nama: reqBody.nama,
                norut: reqBody.norut,
                ketum: reqBody.ketum,
                vismis: reqBody.vismis,
                alamat: reqBody.alamat,
                image: reqBody.image
            })

            await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder()
            .insert()
            .into(Partai)
            .values(partai)
            .execute()

            return partai

        } catch (error) {
            throw error
        }
    }

    async find() : Promise<IPartai[]> {
        try{
            const partais =  await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder('partais')
            .getMany()

            return partais
        } catch (error) {
            throw error
        }
    }
}