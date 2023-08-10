import { Request, Response } from "express";
import MoviesRepo from "../repositories/movie.repo";
class MoviesController {
  public static async getAllMovies(req: Request, res: Response) {
    const { page, limit } = req.query;
    try {
      const movies = await MoviesRepo.getAllMovies(
        parseInt(page as string, 10) || 1,
        parseInt(limit as string, 10) || 10
      );
      res.status(200).json({
        ok: "true",
        movies,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
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
        ok: false,
        msg: error,
      });
    }
  }
  public static async postMovie(req: Request, res: Response) {
    const {
      title,
      releaseDate,
      genre,
      plotSummary,
      language,
      director,
      rating,
    } = req.body;
    try {
      const movie = MoviesRepo.postMovie({
        title,
        releaseDate,
        genre,
        plotSummary,
        language,
        director,
        rating,
      });
      res.status(201).json({
        ok: "created",
        movie,
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error,
      });
    }
  }
  public static async updateMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    const updateObject = req.body;
    try {
      const movie = MoviesRepo.updateMovie(updateObject, parseInt(movieId));
      res.status(201).json({
        ok: "created",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        msg: error,
      });
    }
  }
  public static async deleteMovie(req: Request, res: Response) {
    const { movieId } = req.params;
    try {
      await MoviesRepo.deleteMovie(parseInt(movieId));
      res.status(201).json({
        ok: "deleted",
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        error,
      });
    }
  }
}
export default MoviesController;
