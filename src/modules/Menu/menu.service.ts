import { prisma } from "../../lib/prisma"

const getAllMeals = async () => {
    const result = await prisma.menu.findMany();
    return result;
}

const getMealDetails = async (mealId: string) => {
    const result = await prisma.menu.findByIdOrThrow({
        where: {
            id: mealId
        }
    });
    return result;
}

export const MealService = {
    getAllMeals,
    getMealDetails
}