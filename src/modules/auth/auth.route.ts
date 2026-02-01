import express, { Router } from "express";
import { AuthController } from "./auth.controller";

const router: Router = express.Router();

router.post("/api/auth/register", AuthController.registerUser)
router.post("/api/auth/login", AuthController.loginUser)
router.post("/api/auth/me", AuthController.myAccount)

export const AuthRouter = router;