import { Request, Response } from "express";
import QualifiersRepo from "../repositories/qualifiers.repo";

class QualifiersController {
  /**
   * getAllQualifiers
   */
  public static async getAllQualifiers(req: Request, res: Response) {
    const { page, limit } = req.query;
    try {
      const qualifiers = await QualifiersRepo.getAllQualifiers(
        parseInt(page as string, 10) | 1,
        parseInt(limit as string, 10) | 10
      );
      res.status(200).json({ qualifiers });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * getOneQualifier
   */
  public static async getOneQualifier(req: Request, res: Response) {
    const { qualifierId } = req.params;
    try {
      const qualifier = await QualifiersRepo.getOneQualifier(
        parseInt(qualifierId as string, 10)
      );
      res.status(200).json({ qualifier });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * postQualifier
   */
  public static async postQualifier(req: Request, res: Response) {
    const { name } = req.body;
    try {
      const qualifier = await QualifiersRepo.postQualifier({ name });
      res.status(200).json({ qualifier });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * updateQualifier
   */
  public static async updateQualifier(req: Request, res: Response) {
    const { qualifierId } = req.params;
    const { name } = req.body;
    try {
      await QualifiersRepo.updateQualifier(
        { name },
        parseInt(qualifierId as string, 10)
      );

      res.status(200).json({ status: "updated" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * deleteQualifier
   */
  public static async deleteQualifier(req: Request, res: Response) {
    const { qualifierId } = req.params;
    try {
      await QualifiersRepo.deleteQualifier(parseInt(qualifierId as string, 10));
      res.status(200).json({ status: "deleted" });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default QualifiersController;
