import Joi from "joi";
import { TblQualifierInstance } from "../../models/tblQualifier";

export const Schema = {
  Qualifiers: {
    create: Joi.object<TblQualifierInstance>({
      qualifier: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblQualifierInstance>({
      qualifier: Joi.string().min(2).required(),
    }),
  },
};
