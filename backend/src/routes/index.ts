import { Router } from "express";
import authHandler from "./auth";

const baseRouter = Router();

baseRouter.post("/login", authHandler);

export default baseRouter;
