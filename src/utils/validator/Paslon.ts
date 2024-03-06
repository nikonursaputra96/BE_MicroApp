import Joi from "joi";

export const PaslonValidator = Joi.object({
    nama: Joi.string().required(),
    norut: Joi.number().required(),
    vismis: Joi.array().items(Joi.string()).required(),
    koalisi: Joi.array().items(Joi.string()).required(),
    image: Joi.string().required(),
})