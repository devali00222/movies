import Joi from "joi";
import { TblMovieInstance } from "../../models/tblmovie";
export const Schema = {
  Movies: {
    create: Joi.object<TblMovieInstance>({
      title: Joi.string().required().min(2).max(200),
      rating: Joi.number().max(10).allow(null),
      imdbVotes: Joi.number().min(6000).max(2000000).allow(null),
      year: Joi.number().allow(null).max(2050),
      genreId: Joi.number().allow(null),
      directorId: Joi.number().allow(null),
      imdb: Joi.number().allow(null),
      qualifierId: Joi.number().allow(null),
    }),
    update: Joi.object<TblMovieInstance>({
      title: Joi.string().min(2).max(200).optional(),
      rating: Joi.number().max(10).allow(null),
      imdbVotes: Joi.number().min(6000).max(2000000).allow(null),
      year: Joi.number().allow(null).max(2050),
      genreId: Joi.number().allow(null),
      directorId: Joi.number().allow(null),
      imdb: Joi.number().allow(null),
      qualifierId: Joi.number().allow(null),
    }),
  },
};
