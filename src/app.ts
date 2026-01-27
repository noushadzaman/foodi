import express from "express";
import cors from "cors";
import { reviewRouter } from "./modules/Review/review.route";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/reviews", reviewRouter);

export default app;
