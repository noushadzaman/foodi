import { prisma } from "../../lib/prisma";

const getUsersOrders = async () => {};

const getOrderDetails = async () => {};

const createOrder = async (data: any) => {
  const result = await prisma.order.post({
    data,
  });
  return result;
};

export const OrderService = {
  getUsersOrders,
  getOrderDetails,
  createOrder,
};
