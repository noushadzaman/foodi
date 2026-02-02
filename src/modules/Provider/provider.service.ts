import { prisma } from "../../lib/prisma"
import { Menu, OrderStatus } from "../../../prisma/generated/prisma/client";

const getAllProvider = async () => {
    const result = await prisma.users.findMany({
        where: {
            role: 'PROVIDER'
        }
    })
}

const getProviderDetails = async (providerId: string) => {
    const result = await prisma.users.findByIdOrThrow({
        where: {
            id: providerId
        }
    })
    return result
}

const createMeal = async (
    data: any
) => {
    const result = prisma.Menu.post({
        data
    })
    return result
}

const updateMeal = async (
    mealId: string,
    data: Menu
) => {
    const result = await prisma.menu.update({
        where: {
            id: mealId
        },
        data
    })
}

const deleteMeal = async (
    mealId: string
) => {
    const result = await prisma.menu.delete({
        where: {
            id: mealId
        }
    })
    return result
}

const updateOrderStatus = async (
    mealId: string,
    orderStatus: OrderStatus
) => {
    const result = await prisma.orders.update({
        where: {
            id: mealId
        },
        data: {
            status: orderStatus
        }
    })
    return result
}

export const ProviderService = {
    getAllProvider,
    getProviderDetails,
    createMeal,
    updateMeal,
    deleteMeal,
    updateOrderStatus
}