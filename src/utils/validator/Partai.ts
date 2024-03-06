import Joi from "joi";

export const PartaiValidator = Joi.object ({
    nama: Joi.string().required(),
    norut: Joi.number().required(),
    ketum: Joi.string().required(),
    vismis: Joi.array().items(Joi.string()).required(),
    alamat: Joi.string().required(),
    image: Joi.string().required(),

}) 