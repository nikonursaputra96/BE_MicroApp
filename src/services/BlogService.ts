import { AppDataSource } from "../data-source"
import { Blog } from "../entity/Blog"
import { User } from "../entity/User"
import IBlog from "../interfaces/BlogInterface"



export default new class BlogService {
    
    // CREATE
    async create(reqBody:any) : Promise<IBlog> {
        try {
            const userRepository = AppDataSource.getRepository(User)
            const repository = AppDataSource.getRepository(Blog)

            
            const user = await userRepository.findOne({where: {userId :reqBody.userId}})

            const blog = repository.create({
                idBlog: reqBody.idBlog,
                title: reqBody.title,
                author: user.fullname,
                image: reqBody.image,
                date: reqBody.date,
                content: reqBody.content,
                user: user
            })

            await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder()
            .insert()
            .into(Blog)
            .values(blog)
            .execute()

            return blog

        } catch(error) {
            throw error
        }

    }



    // SELECT

    async find() : Promise<any> {
        try {
            const blogs = await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder('blog')
            .leftJoin('blog.user','user')
            .select(['blog','user'])
            .getMany()

            return blogs
        } catch (error) {
            throw error
        }
    }

    async update(reqBody:any, idBlog:number) : Promise<any> {
        try {
            const repository =  AppDataSource.getRepository(Blog)
            const blog = repository.create({
                title: reqBody.title,
                date: reqBody.date,
                content: reqBody.content,
            })

            await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder()
            .update(Blog)
            .set(blog)
            .where({idBlog})
            .execute()

        } catch (error){
            throw error
        }
    }

    async delete(idBlog: number) : Promise<any> {
        try {
            const blog = await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder()
            .delete()
            .from(Blog)
            .where({idBlog})
            .execute()
            
            return blog
        } catch (error) {
            throw error
        }
    }

}