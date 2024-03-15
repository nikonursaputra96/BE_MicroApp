import Joi from "joi";

export const PaslonValidator = Joi.object({
    name: Joi.string().required(),
    number: Joi.number().required(),
    vismis: Joi.array().items(Joi.string()).required(),
    coalition: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
})