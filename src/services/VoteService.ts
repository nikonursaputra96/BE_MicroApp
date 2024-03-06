import { AppDataSource } from "../data-source"
import { Vote } from "../entity/Vote"

export default new class VoteService {
    async create (reqBody: any) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Vote)

            const vote = repository.create({
                idVote: reqBody.idVote,
            })

            await AppDataSource
            .getRepository(Vote)
            .createQueryBuilder()
            .insert()
            .into(Vote)
            .values(vote)
            .execute()

            return vote

        } catch (error) {

            throw error
        }

    }


    async find() : Promise<any> {
        try{
            const votes = await AppDataSource
            .getRepository(Vote)
            .createQueryBuilder('vote')
            .getMany()

            return votes

        } catch (error) {
            
            throw error
        }
    }
}