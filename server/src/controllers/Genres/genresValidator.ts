import Joi from "joi";
import { TblGenreInstance } from "../../models/tblgenre";

export const Schema = {
  Genres: {
    create: Joi.object<TblGenreInstance>({
      genre: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblGenreInstance>({
      genre: Joi.string().min(2).required(),
    }),
  },
};
