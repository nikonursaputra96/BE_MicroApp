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

}