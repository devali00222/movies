import { Request, Response } from "express";
import MoviesRepo from "../repositories/movies.repo";
class MoviesController {
  public static async getAllMovies(req: Request, res: Response) {
    const { page, limit } = req.query;
    try {
      const movies = await MoviesRepo.getAllMovies(
        parseInt(page as string, 10) || 1,
        parseInt(limit as string, 10) || 10
      );
      res.status(200).json({
        movies,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async getOneMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    try {
      const movie = await MoviesRepo.getOneMovie(parseInt(movieId));
      res.status(200).json({
        movie,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async postMovie(req: Request, res: Response) {
    const { title, rating, imdbVotes, year, genre, director, imdb, qualifier } =
      req.body;
    try {
      const movie = await MoviesRepo.postMovie({
        title,
        rating,
        imdbVotes,
        year,
        genre,
        director,
        imdb,
        qualifier,
      });
      res.status(201).json({
        status: "created",
        movie,
      });
    } catch (error) {
      res.status(500).json({
        msg: error,
      });
    }
  }
  public static async updateMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    const updateObject = req.body;
    try {
      await MoviesRepo.updateMovie(
        updateObject,
        parseInt(movieId as string, 10)
      );
      res.status(201).json({
        status: "updated",
      });
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  }
  public static async deleteMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    try {
      await MoviesRepo.deleteMovie(parseInt(movieId));
      
      res.status(201).json({
        status: "deleted",
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
export default MoviesController;
