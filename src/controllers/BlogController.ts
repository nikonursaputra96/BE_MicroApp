import { Request, Response } from "express";
import BlogService from "../services/BlogService";
import { BlogValidator } from "../utils/validator/Blog";

export default new class BlogController {
    async create (req: Request, res: Response) : Promise<Response> {
        try {
            const data = req.body

            const {error, value} = BlogValidator.validate(data)
            if(error) return res.status(400).json({message : error.details[0].message})

            const blog = await BlogService.create(value)

            return res.status(201).json(blog)
        } catch(error) {
            return res.status(500).json({message : error})
        }
    }

    async find(req: Request, res: Response) : Promise<Response> {
        try {
            const blogs = await BlogService.find()
            return res.status(201).json(blogs)
        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update (req: Request, res:Response) : Promise<Response> {
        try {
            const idBlog = parseInt(req.params.idBlog)
            const blogs= await BlogService.update(req.body, idBlog)

            return res.status(201).json({message : 'Success Updating Data!'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async delete (req:Request, res:Response) : Promise<Response> {
        try {
            const idBlog = parseInt(req.params.idBlog)
            const del = await BlogService.delete(idBlog)

            return res.status(201).json({message : 'Remove Success!'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }
}