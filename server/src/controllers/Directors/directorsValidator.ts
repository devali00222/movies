import Joi from "joi";
import { TblDirectorInstance } from "../../models/tbldirector";

export const Schema = {
  Directors: {
    create: Joi.object<TblDirectorInstance>({
      director: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblDirectorInstance>({
      director: Joi.string().min(2).required(),
    }),
  },
};
