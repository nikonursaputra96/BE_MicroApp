import Joi from "joi";

export const UserValidator = Joi.object({
    fullname: Joi.string().required(),
    role: Joi.any().optional().allow(),
    alamat: Joi.string().required(),
    jeniskelamin: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().required()
})