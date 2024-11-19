import { Router } from "express";
import { UserController } from "../../controllers/user/user.controller.js";
import { auth } from "../../middleware/auth.middleware.js";
import { addVal, updateVal } from "../../validator/user/user.validator.js";
import { validate } from "../../validator/validator.js";

export const router = Router();

router.post("/sign-up", addVal(), validate, UserController.signUp);
router.post("/login", updateVal(), validate, UserController.login);
router.get("/me", auth, UserController.getProfile);
