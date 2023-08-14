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
      const response = await QualifiersRepo.getOneQualifier(
        parseInt(qualifierId as string, 10)
      );
      if (response) {
        res.status(200).json({ response });
      } else {
        res
          .status(500)
          .json({ error: `Unable to get qualifier with id ${qualifierId}` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * postQualifier
   */
  public static async postQualifier(req: Request, res: Response) {
    const { qualifier } = req.body;
    try {
      const response = await QualifiersRepo.postQualifier({ qualifier });
      res.status(200).json({ response });
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  /**
   * updateQualifier
   */
  public static async updateQualifier(req: Request, res: Response) {
    const { qualifierId } = req.params;
    const { qualifier } = req.body;
    try {
      const qualifierResponse = await QualifiersRepo.getOneQualifier(
        parseInt(qualifierId as string, 10)
      );
      if (qualifierResponse) {
        const response = await QualifiersRepo.updateQualifier(
          { qualifier },
          parseInt(qualifierId as string, 10)
        );
        if (response[0] === 0) {
          res.status(500).json({ error: "Unexpected error" });
        } else {
          res.status(200).json({ status: "updated" });
        }
      } else {
        res
          .status(500)
          .json({ error: `Unable to get qualifier with id ${qualifierId}` });
      }
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
      const qualifierResponse = await QualifiersRepo.getOneQualifier(
        parseInt(qualifierId as string, 10)
      );
      if (qualifierResponse) {
        const response = await QualifiersRepo.deleteQualifier(
          parseInt(qualifierId as string, 10)
        );
        if (response === 0) {
          res.status(500).json({ error: "Unexpected error" });
        } else {
          res.status(200).json({ status: "deleted" });
        }
      } else {
        res
          .status(500)
          .json({ error: `Unable to get qualifier with id ${qualifierId}` });
      }
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
export default QualifiersController;
