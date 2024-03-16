import { Request, Response } from "express";
import PaslonService from "../services/PaslonService";
import { PaslonValidator } from "../utils/validator/Paslon";

export default new class PaslonController {
    async create (req: Request, res: Response) : Promise<Response> {
        try{
            const data = req.body

            const {error, value} = PaslonValidator.validate(data)
            if(error) return res.status(400).json({message : error.details[0].message})

            const paslon = await PaslonService.create(value)

            console.log(paslon)
            return res.status(201).json(paslon)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async find (req: Request, res: Response) : Promise<Response> {
        try {
            const paslons = await PaslonService.find()
            return res.status(200).json(paslons)

        } catch (error) {
            return res.status(500).json({message: error})
        }
    }

    async update (req : Request, res: Response) : Promise<Response> {
        try {
            const idPaslon = parseInt(req.params.idPaslon)
            const paslon =  await PaslonService.update(req.body, idPaslon)

            return res.status(201).json({message : 'Success Updating Data !!'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async delete (req: Request, res: Response) : Promise<Response> {
        try {
            const idPaslon = parseInt(req.params.idPaslon)
            const del = await PaslonService.delete(idPaslon)

            return res.status(201).json({message : 'Remove Success'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }
}