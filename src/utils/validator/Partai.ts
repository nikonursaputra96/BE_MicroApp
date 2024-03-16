import Joi from "joi";

export const PartaiValidator = Joi.object ({
    name: Joi.string().required(),
    number: Joi.number().required(),
    chairman: Joi.string().required(),
    vismis: Joi.array().items(Joi.string()).required(),
    address: Joi.string().required(),
    image: Joi.string().required(),
    paslon: Joi.number().optional().allow(null)

}) 