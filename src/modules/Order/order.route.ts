import express, { Router } from "express";
import { OrderController } from "./order.controller";

const router: Router = express.Router();

// get user's orders
router.get("/", OrderController.getUsersOrders);
// get order details
router.get("/:id", OrderController.getOrderDetails);
// post order
router.post("/", OrderController.createOrder);

export const OrderRouter = router;
