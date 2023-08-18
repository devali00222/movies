import jwt, { JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isLogedin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decodedToken = jwt.verify(
      token,
      (process.env.JWT_PRIVATE_KEY as string) || "12345-67890-09876-54321"
    ) as JwtPayload;
    req.userId = decodedToken.userId as number;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};
