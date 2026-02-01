import { Request, Response } from "express"
import { MealService } from "./menu.service"

const getAllMeals = async (req: Request, res: Response) => {
    try {
        const result = await MealService.getAllMeals();
    } catch (error) {
        console.log(error)
    }
}

const getMealDetails = async (req: Request, res: Response) => {
    try {
        const result = await MealService.getMealDetails();
    } catch (error) {
        console.log(error)
    }
}

export const MealsController = {
    getAllMeals,
    getMealDetails
}