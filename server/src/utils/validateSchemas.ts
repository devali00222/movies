import Joi from "joi";
import { TblDirectorInstance } from "../models/tblDirector";
import { TblGenreInstance } from "../models/tblgenre";
import { TblMovieInstance } from "../models/tblMovie";

export const Schema = {
  Movies: {
    create: Joi.object<TblMovieInstance>({
      title: Joi.string().required().min(2).max(200),
      rating: Joi.number().max(10).allow(null),
      imdbVotes: Joi.number().min(20).max(250).allow(null),
      year: Joi.number().allow(null).max(4),
      genre: Joi.number().allow(null),
      director: Joi.number().allow(null),
      imdb: Joi.number().allow(null),
      qualifier: Joi.number().allow(null),
    }),
    update: Joi.object<TblMovieInstance>({
      title: Joi.string().min(2).max(200),
      rating: Joi.number().max(10).allow(null),
      imdbVotes: Joi.number().min(20).max(250).allow(null),
      year: Joi.number().allow(null).max(4),
      genre: Joi.number().allow(null),
      director: Joi.number().allow(null),
      imdb: Joi.number().allow(null),
      qualifier: Joi.number().allow(null),
    }),
  },
  Genres: {
    create: Joi.object<TblGenreInstance>({
      name: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblGenreInstance>({
      name: Joi.string().min(2).required(),
    }),
  },
  Directors: {
    create: Joi.object<TblDirectorInstance>({
      name: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblDirectorInstance>({
      name: Joi.string().min(2).required(),
    })
  }
};
