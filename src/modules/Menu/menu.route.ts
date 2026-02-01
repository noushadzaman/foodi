import express, { Router } from "express";
import { MealsController } from "./menu.controller";

const router: Router = express.Router();

// get all meals
router.get("/", MealsController.getAllMeals);
// get meal details
router.get("/:id", MealsController.getMealDetails);


export const MenuRouter = router;