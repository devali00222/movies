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
  /**
   * getOneGenre
   */
  public static async getOneGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    try {
      const response = await GenreRepo.getOneGenre(
        parseInt(genreId as string, 10)
      );
      if (!response) {
        res
          .status(500)
          .json({ error: `genre with this id ${genreId} dosen't exist` });
      } else {
        res.status(200).json({
          response,
        });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  /**
   * PostGenre
   */
  public static async postGenre(req: Request, res: Response) {
    const { genre } = req.body;
    try {
      const response = await GenreRepo.postGenre({ genre });
      res.status(200).json({
        response,
      });
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
  /**
   * UpdateGenre
   */
  public static async updateGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    const { genre } = req.body;
    try {
      const genreResponse = await GenreRepo.getOneGenre(
        parseInt(genreId as string, 10)
      );
      if (genreResponse) {
        const response = await GenreRepo.updateGenre(
          { genre },
          parseInt(genreId as string, 10)
        );
        if (response[0] === 0) {
          res.status(500).json({ error: "unexpected error" });
        } else {
          res.status(200).json({
            msg: "updated",
          });
        }
      } else {
        res
          .status(500)
          .json({ error: `genre with id ${genreId} dosen't exist` });
      }
    } catch (error) {
      res.status(500).json({
        error: error,
      });
    }
  }
  /**
   * DeleteGenre
   */
  public static async deleteGenre(req: Request, res: Response) {
    const { genreId } = req.params;
    try {
      const genre = await GenreRepo.getOneGenre(
        parseInt(genreId as string, 10)
      );
      if (genre) {
        const response = await GenreRepo.deleteGenre(
          parseInt(genreId as string, 10)
        );
        if (response === 0) {
          res.status(500).json({ error: "unexpected error" });
        } else {
          res.status(200).json({
            msg: "deleted",
          });
        }
      } else {
        res
          .status(500)
          .json({ error: `genre with id ${genreId} dosen't exist` });
      }
    } catch (error) {
      res.status(500).json({
        error,
      });
    }
  }
}
export default GenreController;
