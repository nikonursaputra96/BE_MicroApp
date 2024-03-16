import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";
import IPaslon from "../interfaces/PaslonInterface";

export default new class PaslonServce {
    async create (reqBody: IPaslon) : Promise<IPaslon> {
        try {
            const repository = AppDataSource.getRepository(Paslon)

            const paslon = repository.create ({
                idPaslon: reqBody.idPaslon,
                name: reqBody.name,
                number: reqBody.number,
                vismis: reqBody.vismis,
                coalition: reqBody.coalition,
                image: reqBody.image
            })

            await AppDataSource
            .getRepository(Paslon)
            .createQueryBuilder()
            .insert()
            .into(Paslon)
            .values(paslon)
            .execute()

            return paslon
        } catch (error) {
            throw error
        }
    }



    // SELECT
    async find() : Promise<IPaslon[]> {
        try {
             const paslons = await AppDataSource
             .getRepository(Paslon)
             .createQueryBuilder('paslon')
             .getMany()

             return paslons
        } catch (error) {
            throw error
        }
    }

    async update(reqBody: any , idPaslon: number) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Paslon)
            const paslon = repository.create ({
                name: reqBody.name,
                number: reqBody.number,
                vismis: reqBody.vismis,
                coalition: reqBody.coalition,
                image: reqBody.image
            })

            await AppDataSource
            .getRepository(Paslon)
            .createQueryBuilder()
            .update(Paslon)
            .set(paslon)
            .where({idPaslon})
            .execute()

        } catch (error) {
            throw error
        }
    }

    async delete (idPaslon : number) : Promise<any> {
        try {
            const paslon = await AppDataSource
            .getRepository(Paslon)
            .createQueryBuilder()
            .delete()
            .from(Paslon)
            .where({idPaslon})
            .execute()

            return paslon
        } catch (error) {
            throw error
        }
    }
}