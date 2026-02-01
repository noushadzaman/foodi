import express, { Router } from "express";
import { AdminController } from "./admin.controller";

const router: Router = express.Router();

router.get("/api/admin/users", AdminController.getAllUsers);
router.patch("/api/admin/users/:id", AdminController.updateUserStatus);

export const adminRouter = router;