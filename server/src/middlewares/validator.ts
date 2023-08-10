import { Request, Response, NextFunction } from "express";
import Joi, { ObjectSchema } from "joi";

export class Validate {
  public static validateId(req: Request, res: Response, next: NextFunction) {
    if (req.params) {
      next();
    } else {
      const err = new Error("please enter Id");
      res.status(404).json({
        status: "missing a prameter",
        Error: err,
      });
    }
  }
  public static validateShcema(Schema: ObjectSchema) {
    return async (req: Request, res: Response, next: NextFunction) => {
      try {
        await Schema.validateAsync(req.body);
        next();
      } catch (err) {
        console.log(err);
        res.status(404).json({
          status: "missing a prameter",
          Error: err,
        });
      }
    };
  }
}
