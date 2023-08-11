import { CreateOpject, UpdateOpject } from "../interfaces/moviesInterface";
import { tblMovieModel } from "../models/tblMovie";

class MoviesRepo {
  static async getAllMovies(page: number, limit: number) {
    try {
      const offset = (page - 1) * limit;
      const movies = await tblMovieModel.findAll({
        offset,
        limit,
      });
      return movies;
    } catch (error) {
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
      if (!movie) throw new Error(`can't find movie with id ${movieId}`);
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
      const movie = await this.getOneMovie(movieId);
      movie.set(updateObject);
      await movie.save();
      return movie;
    } catch (error) {
      throw new Error("Unable to updateMovie");
    }
  }
  static async deleteMovie(movieId: number) {
    try {
      await tblMovieModel.destroy({
        where: {
          id: movieId,
        },
      });
      return;
    } catch (error) {
      throw new Error(`Can't find movie`);
    }
  }
}
export default MoviesRepo;
