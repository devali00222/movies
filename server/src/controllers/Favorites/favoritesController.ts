import { Request, Response } from "express";
import FavoritesRepo from "../../repositories/favorites.repo";

class FavoritesController {
  public static async getAllFavorites(req: Request, res: Response) {
    const userId = req.userId;
    try {
      const favorites = await FavoritesRepo.getAllFavorites(userId!);
      res.status(200).json({ favorites });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async deleteAllFavorites(req: Request, res: Response) {
    const userId = req.userId;
    try {
      const affectedRows = await FavoritesRepo.deleteAllFavorites(userId!);
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
  public static async addFavorite(req: Request, res: Response) {
    const userId = req.userId;
    const favoritId = parseInt(req.params.favoritId as string, 10);
    try {
      const favorite = await FavoritesRepo.addFavorite(userId!, favoritId);
      if (favorite) {
        res.status(200).json({
          favorite,
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
  public static async deleteFavorite(req: Request, res: Response) {
    const userId = req.userId;
    const favoritId = parseInt(req.params.favoritId as string, 10);
    try {
      const affectedRows = await FavoritesRepo.deleteFavorite(
        userId!,
        favoritId
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
export default FavoritesController;
