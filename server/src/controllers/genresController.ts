import { Request, Response } from "express";
import GenreRepo from "../repositories/genre.repo";

class GenreController {
  /**
   * getAllgenres
   */
  public static async getAllgenres(req: Request, res: Response) {
    const { page, limit } = req.query;
    try {
      const genres = await GenreRepo.getAllGenres(
        parseInt(page as string, 10) || 1,
        parseInt(limit as string, 10) || 10
      );
      res.status(200).json({
        genres,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async getOneGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    try {
      const genre = await GenreRepo.getOneGenre(
        parseInt(genreId as string, 10)
      );
      res.status(200).json({
        genre,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async postGenre(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const genre = await GenreRepo.postGenre({ name });
      res.status(200).json({
        genre,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async updateGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    const { name } = req.body;
    try {
      await GenreRepo.updateGenre({ name }, parseInt(genreId as string, 10));
      res.status(200).json({
        msg: "updated",
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  public static async deleteGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    try {
      await GenreRepo.deleteGenre(parseInt(genreId as string, 10));
      res.status(200).json({
        msg: "deleted",
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
export default GenreController;
