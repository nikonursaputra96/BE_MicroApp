import { Request, Response } from "express";
import UserService from "../services/UserService";
import { UserValidator } from "../utils/validator/User";

export default new class UserController {
    async create(req: Request, res: Response) : Promise<Response>{
        try {
            const data = req.body


            const {error, value} = UserValidator.validate(data)
            if(error) return res.status(400).json({message : error.details[0].message})

            const user = await UserService.create(value)

            console.log(user)
            return res.status(201).json(user)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }


    async find(req: Request, res: Response) : Promise<Response>{
        try {
            const users = await UserService.find()

            return res.status(201).json(users)
        } catch(error) {
            return res.status(500).json({message : error})
        }
    }

    async catch (req: Request , res: Response) : Promise<Response> {
        try {
            const userId = parseInt(req.params.userId)
            const find = await UserService.catch(userId)

            if (!find) {
                return res.status(404).json({message : 'userId not found!'})
            }
            return res.status(201).json(find)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async delete (req : Request, res: Response) : Promise<Response> {
        try {
            const userId = parseInt(req.params.userId)
            const del = await UserService.delete(userId)

            return res.status(202).json({message : 'Remove Success'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async update (req: Request, res: Response) : Promise<Response> {
        try {
            const userId = parseInt(req.params.userId)
            const update = await UserService.update(req.body, userId)

            return res.status(202).json({message: 'Success Updating Data!'})
        } catch ( error) {
            return res.status(500).json({message: error})
        }
    }
}