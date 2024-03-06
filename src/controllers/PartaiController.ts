import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import PartaiService from "../services/PartaiService";
import { PartaiValidator } from "../utils/validator/Partai";

export default new class PartaiController {
    async create (req: Request, res: Response) : Promise<Response> {

        try {
            const data = req.body 

            const {error, value} = PartaiValidator.validate(data)
            if(error) return res.status(400).json({message : error.details[0].message})

            const partai = await PartaiService.create(value)

            console.log(partai)
            return res.status(201).json(partai)

        } catch (error) {
            return res.status(500).json({message : error})
        }
       
    }

    async find (req: Request, res:Response) : Promise<Response> {
        try {
            const partais = await PartaiService.find()
            return res.status(201).json(partais)
        } catch (error) {
            return res.status(500).json({message: error})
        }

    }
}