import { AppDataSource } from "../data-source"
import { Vote } from "../entity/Vote"

export default new class VoteService {
    async create (reqBody: any) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Vote)

            const vote = repository.create({
                idVote: reqBody.idVote,
                user: reqBody.user,
                paslon: reqBody.paslon
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
        try {
            const votes = await AppDataSource
            .getRepository(Vote)
            .createQueryBuilder('votes')
            .leftJoinAndSelect('votes.user', 'user')
            .leftJoinAndSelect('votes.paslon','paslon')
            .getMany()
            console.log('Votes:', votes)
            return votes

        } catch (error) {
            
            throw error
        }
    }

    async update(reqBody: any, idVote: number) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(Vote)
            const vote = repository.create ({
                user: reqBody.user,
                paslon: reqBody.paslon
            })

            await AppDataSource
            .getRepository(Vote)
            .createQueryBuilder()
            .update(Vote)
            .set(vote)
            .where({idVote})
            .execute()

        } catch (error) {
            throw error
        }
    }

    async delete(idVote: number) : Promise<any> {
        try {
            const vote = await AppDataSource
            .getRepository(Vote)
            .createQueryBuilder()
            .delete()
            .from(Vote)
            .where({idVote})
            .execute()

            return vote
        } catch (error) {
            throw error
        }
    }
}