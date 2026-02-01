import express, { Router } from "express";
import { ProviderController } from "./provider.controller";

const router: Router = express.Router();

//get all provider
router.get("/", ProviderController.getAllProvider);
//get provider details
router.get("/:id", ProviderController.getProviderDetails);

router.post("/meals", ProviderController.createMeal);
router.put("/meals/:id", ProviderController.updateMeal);
router.delete("/meals/:id", ProviderController.deleteMeal);
router.patch("/orders/:id", ProviderController.updateOrderStatus);

export const providerRouter = router;