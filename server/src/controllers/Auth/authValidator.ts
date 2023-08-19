import Joi from "joi";
import { TblUserInstance } from "../../models/tblUser";

export const Schema = {
  User: {
    register: Joi.object<TblUserInstance>({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().optional(),
    }),
    login: Joi.object<TblUserInstance>({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    })
  },
};
