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
                role: reqBody.role,
                alamat: reqBody.alamat,
                jeniskelamin: reqBody.jeniskelamin,
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
}