import { Router } from "express";
import { UserController } from "../../controllers/user/user.controller.js";
import { auth } from "../../middleware/auth.middleware.js";

export const router = Router();

router.post("/sign-up", UserController.signUp);
router.post("/login", UserController.login);
router.get("/me", auth, UserController.getProfile);
