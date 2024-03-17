import Joi from "joi";
import { UserValidator } from "./User";

export const BlogValidator = Joi.object ({
    title: Joi.string().required(),
    author: Joi.any().optional().allow(null),
    image:Joi.string().required(),
    date: Joi.string().required(),
    content: Joi.array().items(Joi.string()).required(),
    userId: Joi.number().optional().allow(null)
})