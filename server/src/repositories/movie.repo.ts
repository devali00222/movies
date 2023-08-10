import { tblMovieModel } from "../models/tblMovie";

class MovieSRepo {
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
  static async postMovie(createOpject: any) {
    try {
      const movie = await tblMovieModel.create(createOpject);
      return movie;
    } catch (error) {
      throw new Error("Unable to post movie to the database.");
    }
  }
  static async updateMovie(updateObject: any, movieId: number) {
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
      const movie = await this.getOneMovie(movieId);
      await tblMovieModel.destroy({
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
export default MovieSRepo;
