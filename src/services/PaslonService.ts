import { AppDataSource } from "../data-source";
import { Paslon } from "../entity/Paslon";
import IPaslon from "../interfaces/PaslonInterface";

export default new class PaslonServce {
    async create (reqBody: IPaslon) : Promise<IPaslon> {
        try {
            const repository = AppDataSource.getRepository(Paslon)

            const paslon = repository.create ({
                idPaslon: reqBody.idPaslon,
                nama: reqBody.nama,
                norut: reqBody.norut,
                vismis: reqBody.vismis,
                koalisi: reqBody.koalisi,
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
             .createQueryBuilder('paslons')
             .getMany()

             return paslons
        } catch (error) {
            throw error
        }
    }
}