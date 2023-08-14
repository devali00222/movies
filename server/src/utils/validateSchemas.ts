import Joi from "joi";
import { TblDirectorInstance } from "../models/tbldirector";
import { TblGenreInstance } from "../models/tblgenre";
import { TblMovieInstance } from "../models/tblmovie";
import { TblQualifierInstance } from "../models/tblqualifier";

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
      title: Joi.string().min(2).max(200),
      rating: Joi.number().max(10).allow(null),
      imdbVotes: Joi.number().min(6000).max(2000000).allow(null),
      year: Joi.number().allow(null).max(2050),
      genreId: Joi.number().allow(null),
      directorId: Joi.number().allow(null),
      imdb: Joi.number().allow(null),
      qualifierId: Joi.number().allow(null),
    }),
  },
  Genres: {
    create: Joi.object<TblGenreInstance>({
      genre: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblGenreInstance>({
      genre: Joi.string().min(2).required(),
    }),
  },
  Directors: {
    create: Joi.object<TblDirectorInstance>({
      director: Joi.string().min(2).required(),
    }),
    update: Joi.object<TblDirectorInstance>({
      director: Joi.string().min(2).required(),
    }),
  },
  Qualifiers: {
    create: Joi.object<TblQualifierInstance>({
      qualifier: Joi.string().min(1).required(),
    }),
    update: Joi.object<TblQualifierInstance>({
      qualifier: Joi.string().min(1).required(),
    }),
  },
};
