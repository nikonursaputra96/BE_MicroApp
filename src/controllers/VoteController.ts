import { Request, Response } from "express";
import VoteService from "../services/VoteService";

export default new class VoteController {
    async create (req: Request, res: Response) : Promise<Response> {
        try {
            const data = req.body
            const vote = await VoteService.create(data)

            return res.status(201).json(vote)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async find (req: Request, res: Response) : Promise<Response> {
        try {
            const votes = await VoteService.find()

            return res.status(201).json(votes)
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async update( req:Request, res: Response) : Promise<Response> {
        try {
            const idVote = parseInt(req.params.idVote)
            const vote = await VoteService.update(req.body, idVote)

            return res.status(201).json({message : 'Success Updating Data !!'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }

    async delete (req:Request, res: Response) : Promise<any> {
        try {
            const idVote = parseInt(req.params.idVote)
            const del = await VoteService.delete(idVote)

            return res.status(201).json({message : 'Remove Success'})
        } catch (error) {
            return res.status(500).json({message : error})
        }
    }
}