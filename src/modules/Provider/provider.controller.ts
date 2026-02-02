import { Request, Response } from "express";
import { ProviderService } from "./provider.service";

const getAllProvider = async (req: Request, res: Response) => {
    try {
        const result = await ProviderService.getAllProvider();
        return result
    } catch (error) {
        console.log(error)
    }
}

const getProviderDetails = async (req: Request, res: Response) => {
    try {
        const providerId = req.params.id;
        const result = await ProviderService.getProviderDetails(providerId as string);
        return result
    } catch (error) {
        console.log(error)
    }
}

const createMeal = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await ProviderService.createMeal(
            data
        );
        return result
    } catch (error) {
        res.status(200).send({
            error: error
        })
    }
}

const updateMeal = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const mealId = req.params.id;
        if (!mealId) {
            res.send({
                message: "Meal id is not valid!"
            })
        }
        const result = await ProviderService.updateMeal(mealId as string, data);
        return result
    } catch (error) {
        console.log(error)
    }
}

const deleteMeal = async (req: Request, res: Response) => {
    try {
        const mealId = req.params.id;
        if (!mealId) {
            res.send({
                message: "Meal id is not valid!"
            })
        }
        const result = await ProviderService.deleteMeal(mealId as string);
        return result
    } catch (error) {
        console.log(error)
    }
}

const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const { orderStatus } = req.body;
        const mealId = req.params.id;
        if (!mealId) {
            res.send({
                message: "Meal id is not valid!"
            })
        }
        const result = await ProviderService.updateOrderStatus(mealId as string, orderStatus);
        return result
    } catch (error) {
        console.log(error)
    }
}

export const ProviderController = {
    getAllProvider,
    getProviderDetails,
    createMeal,
    updateMeal,
    deleteMeal,
    updateOrderStatus
}