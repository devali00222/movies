import { QueryTypes } from "sequelize";
import { sequelize } from "../config/sequelize";
import { CreateOpject, UpdateOpject } from "../controllers/Movies/moviesInterface";
import { tblMovieModel } from "../models/tblmovie";
import { getAllMovies, getFiltterdMovies } from "../controllers/Movies/moviesQueries";

class MoviesRepo {
  static async getAllMovies(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const movies = await sequelize.query(getAllMovies(limit, offset), {
        type: QueryTypes.SELECT,
      });

      return movies;
    } catch (error) {
      console.log(error);
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  static async fillterMovies(page: number, limit: number, query?: any) {
    try {
      const offset = page && limit ? (page - 1) * limit : 0;
      const { genre, director, qualifier, year, rating, imdbVotes, imdb, order } =
        query;
      const movies = await sequelize.query(getFiltterdMovies(limit, offset), {
        replacements: {
          genre: genre || null,
          qualifier: qualifier || null,
          director: director || null,
          year: year || null,
          rating: rating || null,
          imdbVotes: imdbVotes || null,
          imdb: imdb || null,
          order: order || null
        },
        type: QueryTypes.SELECT,
      });
      return movies
    } catch (error) {
      console.log(error);
      throw new Error("Unable to fetch movies from the database.");
    }
  }
  static async getOneMovie(movieId: number) {
    try {
      const movie = await tblMovieModel.findOne({
        where: {
          id: movieId,
        },
      });
      return movie;
    } catch (error) {
      throw new Error("Unable to fetch movie from the database.");
    }
  }
  static async postMovie(createOpject: CreateOpject) {
    try {
      const movie = await tblMovieModel.create(createOpject);
      return movie;
    } catch (error) {
      throw new Error("Unable to post movie to the database.");
    }
  }
  static async updateMovie(updateObject: UpdateOpject, movieId: number) {
    try {
      const movie = await tblMovieModel.update(updateObject, {
        where: {
          id: movieId,
        },
      });
      return movie;
    } catch (error) {
      throw new Error("Unable to updateMovie");
    }
  }
  static async deleteMovie(movieId: number) {
    try {
      const movie = await tblMovieModel.destroy({
        where: {
          id: movieId,
        },
      });

      return movie;
    } catch (error) {
      throw new Error(`Can't find movie`);
    }
  }
}
export default MoviesRepo;
