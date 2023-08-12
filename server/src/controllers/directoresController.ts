import { Request, Response } from "express";
import DirectorRepo from "../repositories/directors.repo";

class DirectorController {
  public static async getAllDirectors(req: Request, res: Response) {
    const { page, limit } = req.query;
    try {
      const directors = await DirectorRepo.getAllDirectors(
        parseInt(page as string, 10) || 1,
        parseInt(limit as string, 10) || 10
      );
      res.status(200).json({ directors });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async getOneDirector(req: Request, res: Response) {
    const { directorId } = req.params;
    try {
      const director = await DirectorRepo.getOneDirector(
        parseInt(directorId as string, 10)
      );
      res.status(200).json({ director });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async postDirector(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const director = await DirectorRepo.postDirector({name});
      res.status(200).json({ director });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async updateDirector(req: Request, res: Response) {
    const { directorId } = req.params;
    const { name } = req.body;
    try {
      await DirectorRepo.updateDirector(
        {name},
        parseInt(directorId as string, 10)
      );
      res.status(200).json({ status: "updated" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async deleteDirector(req: Request, res: Response) {
    const { directorId } = req.params;
    try {
      await DirectorRepo.deleteDirector(parseInt(directorId as string, 10));
      res.status(200).json({ status: "deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default DirectorController;
