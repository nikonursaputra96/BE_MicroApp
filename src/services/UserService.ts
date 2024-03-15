import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import IUser from "../interfaces/UserInterface"

export default new class UserService {

// CREATE DATA
    async create(reqBody: IUser) : Promise<IUser> {
        try{
        
            const repository = AppDataSource.getRepository(User)

            const user = repository.create({
                userId: reqBody.userId,
                fullname: reqBody.fullname,
                role: reqBody.role || null,
                address: reqBody.address,
                gender: reqBody.gender,
                username: reqBody.username,
                password: reqBody.password
            })

            await AppDataSource
            .getRepository(User)
            .createQueryBuilder()
            .insert()
            .into(User)
            .values(user)
            .execute()

            return user
        } catch (error) {
            throw error
        }
    }

    // SELECT DATA
    async find() : Promise<IUser[]> {
        try{
            const users = await AppDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .getMany()

            return users
        } catch (error) {
            throw error
        }
    }

    // Catch data
    async catch(userId: number) : Promise<IUser> {
        try {
            const user = await AppDataSource
            .getRepository(User)
            .createQueryBuilder('user')
            .where({userId})
            .getOne()
        
            return user
        } catch (error) {
            throw error
        }
    }

    async delete (userId: number): Promise<any> {
        try {
            const users = await AppDataSource
            .getRepository(User)
            .createQueryBuilder()
            .delete()
            .from(User)
            .where ({userId})
            .execute()

            return users
        } catch (error) {
            throw error
        }
    }

    async update (reqBody: IUser, userId:number) : Promise<any> {
        try {
            const repository = AppDataSource.getRepository(User)
            const user = repository.create ({
                fullname: reqBody.fullname,
                address: reqBody.address,
                username: reqBody.username,
                password: reqBody.password
            })

            await AppDataSource
            .getRepository(User)
            .createQueryBuilder()
            .update(User)
            .set(user)
            .where({userId})
            .execute()

        } catch (error) {
            throw error
        }
    }
}