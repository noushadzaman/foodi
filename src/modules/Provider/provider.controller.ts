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
        const result = await ProviderService.getProviderDetails();
        return result
    } catch (error) {
        console.log(error)
    }
}

const createMeal = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await ProviderService.createMeal(
            // data
        );
        return result
    } catch (error) {
        console.log(error)
    }
}

const updateMeal = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const result = await ProviderService.updateMeal(
            // data
        );
        return result
    } catch (error) {
        console.log(error)
    }
}

const deleteMeal = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const mealId = req.params;
        const result = await ProviderService.deleteMeal(
            // mealId
        );
        return result
    } catch (error) {
        console.log(error)
    }
}

const updateOrderStatus = async (req: Request, res: Response) => {
    try {
        const data = req.body;
        const mealId = req.params;
        const result = await ProviderService.updateOrderStatus(
            // mealId,
            // data
        );
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