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
      if (director) {
        res.status(200).json({ director });
      } else {
        res
          .status(500)
          .json({ error: `director with id ${directorId} dosen't exist` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async postDirector(req: Request, res: Response) {
    const { director } = req.body;
    try {
      const response = await DirectorRepo.postDirector({ director });
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async updateDirector(req: Request, res: Response) {
    const { directorId } = req.params;
    const { director } = req.body;
    try {
      const directorResponse = await DirectorRepo.getOneDirector(
        parseInt(directorId as string, 10)
      );
      if (directorResponse) {
        const response = await DirectorRepo.updateDirector(
          { director },
          parseInt(directorId as string, 10)
        );
        if (response[0] === 0) {
          res.status(500).json({ error: "Unexpected error" });
        } else {
          res.status(200).json({ status: "updated" });
        }
      } else {
        res
          .status(500)
          .json({ error: `director with id ${directorId} dosen't exist` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public static async deleteDirector(req: Request, res: Response) {
    const { directorId } = req.params;
    try {
      const directorResponse = await DirectorRepo.getOneDirector(
        parseInt(directorId as string, 10)
      );
      if (directorResponse) {
        const response = await DirectorRepo.deleteDirector(
          parseInt(directorId as string, 10)
        );
        if (response === 0) {
          res.status(500).json({ error: "Unexpected error" });
        } else {
          res.status(200).json({ status: "deleted" });
        }
      } else {
        res
          .status(500)
          .json({ error: `director with id ${directorId} dosen't exist` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default DirectorController;
