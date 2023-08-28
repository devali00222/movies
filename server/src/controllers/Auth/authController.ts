import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import UserRepo from "../../repositories/user.repo";
import { CreateOpject } from "./authInterface";
import getConfig from "../../config/config";

class AuthController {
  public static async register(req: Request, res: Response) {
    const { email, password, ...userData }: CreateOpject = req.body;
    const existingUser = await UserRepo.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await UserRepo.createUser({ email, password: hashedPassword, ...userData });
    res.json({ message: "User registered successfully" });
  }
  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await UserRepo.findByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign(
      { userId: user.id },
      (getConfig().secretKey as string) || "12345-67890-09876-54321"
    );
    res.json({
      token,
      user
    });
  }
}
export default AuthController;
