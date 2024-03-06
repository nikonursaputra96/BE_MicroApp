import Joi from "joi";

export const BlogValidator = Joi.object ({
    title: Joi.string().required(),
    author: Joi.string().required(),
    date: Joi.string().required(),
    content: Joi.array().items(Joi.string()).required()
})