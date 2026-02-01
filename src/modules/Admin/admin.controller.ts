import { Request, Response } from "express";
import { AdminService } from "./admin.service"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.getAllUsers();
    } catch (error) {
        console.log(error)
    }
}

const updateUserStatus = async (req: Request, res: Response) => {
    try {
        const userId = req.params
        const result = await AdminService.updateUserStatus();
    } catch (error) {
        console.log(error)
    }
}

export const AdminController = {
    getAllUsers,
    updateUserStatus
}