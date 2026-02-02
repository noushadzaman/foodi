import { Request, Response } from "express";
import { OrderService } from "./order.service"

const getUsersOrders = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getUsersOrders();
        return result
    } catch (error) {
        console.log(error)
    }
}

const getOrderDetails = async (req: Request, res: Response) => {
    try {
        const result = await OrderService.getOrderDetails();
        return result
    } catch (error) {
        console.log(error)
    }
}

const createOrder = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await OrderService.createOrder(
            data
        );
        return result
    } catch (error) {
        console.log(error)
    }
}

export const OrderController = {
    getUsersOrders,
    getOrderDetails,
    createOrder
}