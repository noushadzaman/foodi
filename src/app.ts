import express, { Request, Response } from "express";
import cors from "cors";
import { reviewRouter } from "./modules/Review/review.route";
import { MenuRouter } from "./modules/Menu/menu.route";
import { OrderRouter } from "./modules/Order/order.route";
import { providerRouter } from "./modules/Provider/provider.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/reviews", reviewRouter);
app.use("/api/meals", MenuRouter);
app.use("/api/orders", OrderRouter);
app.use("/api/providers", providerRouter);

app.get("/", (req: Request, res: Response) => {
  res.send(`Hello world!`);
});

export default app;
