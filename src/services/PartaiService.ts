import { AppDataSource } from "../data-source";
import { Partai } from "../entity/Partai";
import IPartai from "../interfaces/PartaiInterface";

export default new class PartaiService {
    async create(reqBody: IPartai) : Promise<IPartai> {
        try {  

            const repository =  AppDataSource.getRepository(Partai)

            const partai = repository.create ({
                idPartai: reqBody.idPartai,
                name: reqBody.name,
                number: reqBody.number,
                chairman: reqBody.chairman,
                vismis: reqBody.vismis,
                address: reqBody.address,
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