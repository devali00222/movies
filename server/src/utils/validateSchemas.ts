import Joi from "joi";
import { TblMovieInstance } from "../models/tblMovie";

export const Schema = {
  Movies: {
    create: Joi.object<TblMovieInstance>({
      title: Joi.string().required().min(2).max(200),
      releaseDate: Joi.date().allow(null),
      genre: Joi.number().allow(null),
      plotSummary: Joi.string().min(20).max(250).allow(null),
      runtime: Joi.number().allow(null),
      language: Joi.string().max(2).allow(null),
      director: Joi.number().allow(null),
      rating: Joi.number().max(10).allow(null),
    }),
    update: Joi.object<TblMovieInstance>({
      title: Joi.string().min(2).max(200).allow(null),
      releaseDate: Joi.date().allow(null),
      genre: Joi.number().allow(null),
      plotSummary: Joi.string().min(20).max(250).allow(null),
      runtime: Joi.number().allow(null),
      language: Joi.string().max(2).allow(null),
      director: Joi.number().allow(null),
      rating: Joi.number().max(10).allow(null),
    }),
  },
};
