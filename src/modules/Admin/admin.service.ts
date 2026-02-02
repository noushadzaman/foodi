import { prisma } from "../../lib/prisma";
import { UserStatus } from "../../../prisma/generated/prisma/enums";

const getAllUsers = async () => {
  const result = await prisma.users.findMany();
  return result;
};

const updateUserStatus = async (userId: string, userStatus: UserStatus) => {
  const result = await prisma.users.update({
    where: {
      id: userId
    },
    data: {
      status: userStatus
    }
  })
  return result
};

export const AdminService = {
  getAllUsers,
  updateUserStatus,
};
