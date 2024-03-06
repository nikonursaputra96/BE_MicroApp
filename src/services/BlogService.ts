import { AppDataSource } from "../data-source"
import { Blog } from "../entity/Blog"
import IBlog from "../interfaces/BlogInterface"


export default new class BlogService {
    
    // CREATE
    async create(reqBody:IBlog) : Promise<IBlog> {
        try {
            
            const repository = AppDataSource.getRepository(Blog)

            const blog = repository.create({
                idBlog: reqBody.idBlog,
                title: reqBody.title,
                author: reqBody.author,
                date: reqBody.date,
                content: reqBody.content
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

    async find() : Promise<IBlog[]> {
        try {
            const blogs = await AppDataSource
            .getRepository(Blog)
            .createQueryBuilder('blogs')
            .getMany()

            return blogs
        } catch (error) {
            throw error
        }
    }

}