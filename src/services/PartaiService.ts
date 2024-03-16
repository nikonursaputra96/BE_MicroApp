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
                image: reqBody.image,
                paslon: reqBody.paslon
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

    async find() : Promise<any> {
        try{
            const partais = await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder('partai')
            .leftJoin('partai.paslon','paslon')
            .select(['partai','paslon'])
            .getMany()

            return partais
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: any, idPartai:number) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Partai)
            const partai = repository.create ({
                name: reqBody.name,
                number: reqBody.number,
                chairman: reqBody.chairman,
                vismis: reqBody.vismis,
                address: reqBody.address,
                image: reqBody.image,
                paslon: reqBody.paslon
            })

            await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder()
            .update(Partai)
            .set(partai)
            .where({idPartai})
            .execute()

        } catch (error) {
            throw error
        }
    }

    async delete(idPartai:number) : Promise<any> {
        try {
            const partai = await AppDataSource
            .getRepository(Partai)
            .createQueryBuilder()
            .delete()
            .from(Partai)
            .where({idPartai})
            .execute()

            return partai
        } catch (error) {
            throw error
        }
    }
}