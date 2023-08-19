import { Request, Response } from "express";
import WatchListRepo from "../../repositories/watchList.repo";

class WatchListController {
  public static async getAllList(req: Request, res: Response) {
    const userId = req.userId;
    try {
      const watchList = await WatchListRepo.getAllList(userId!);
      res.status(200).json({ watchList });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async deleteAllList(req: Request, res: Response) {
    const userId = req.userId;
    try {
      const affectedRows = await WatchListRepo.deleteAllList(userId!);
      if (affectedRows === 0) {
        res.status(400).json({
          error: "Unexpected Error",
        });
      } else {
        res.status(201).json({ delete: true });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async addToList(req: Request, res: Response) {
    const userId = req.userId;
    const movieId = parseInt(req.params.movieId as string, 10);
    try {
      const movie = await WatchListRepo.addToList(userId!, movieId);
      if (movie) {
        res.status(200).json({
          movie,
        });
      } else {
        res.status(500).json({
          error: "Unexpected Error",
        });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async deleteFromList(req: Request, res: Response) {
    const userId = req.userId;
    const movieId = parseInt(req.params.movieId as string, 10);
    try {
      const affectedRows = await WatchListRepo.deleteFromList(
        userId!,
        movieId
      );
      if (affectedRows === 0) {
        res.status(400).json({
          error: "Unexpected Error",
        });
      } else {
        res.status(201).json({ delete: true });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default WatchListController;
