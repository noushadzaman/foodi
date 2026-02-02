import { Request, Response } from "express";
import { AdminService } from "./admin.service"

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const result = await AdminService.getAllUsers();
        res.send(result);
    } catch (error) {
        // console.log(error);
        res.status(400)
            .send(error)
    }
}

const updateUserStatus = async (req: Request, res: Response) => {
    try {
        const userId = req.params.id;
        const { userStatus } = req.body;
        if (userId) {
            res.send({
                message: "User id is not valid!"
            });
            return
        }
        const result = await AdminService.updateUserStatus(userId as string, userStatus);
        res.send(result);
    } catch (error) {
        // console.log(error);
        res.status(400)
            .send(error)
    }
}

export const AdminController = {
    getAllUsers,
    updateUserStatus
}