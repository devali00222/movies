import { CreateOpject, UpdateOpject } from "../interfaces/moviesInterface";
import { tbldirector } from "../models/tbldirector";
import { tblgenre } from "../models/tblgenre";
import { tblMovieModel } from "../models/tblmovie";
import { tblqualifier } from "../models/tblqualifier";

class MoviesRepo {
  static async getAllMovies(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const movies = await tblMovieModel.findAll({
        limit,
        offset,
        include: [{ model: tblgenre }],
      });
      return movies;
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
