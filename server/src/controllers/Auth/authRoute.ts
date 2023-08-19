import { Router } from "express";
import { Validate } from "../../middlewares/validator";
import AuthController from "./authController";
import { Schema } from "./authValidator";

const router = Router();

router.post(
  "/register",
  Validate.validateShcema(Schema.User.register),
  AuthController.register
);
router.post(
  "/login",
  Validate.validateShcema(Schema.User.login),
  AuthController.login
);

export default router;
