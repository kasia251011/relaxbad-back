// require('dotenv').config();

import dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import usersRoutes from "./routes/User";
import groupRoutes from "./routes/Group";
import doubleRoutes from "./routes/record/Double";
import singleRoutes from "./routes/record/Single";
import { database } from "./config/database";
import { RegisterStatus } from "./model/common";
import { LocalStorage } from "node-localstorage";

export const REGISTER_STATE_KEY = "register-state";
export const localStorage = new LocalStorage("./scratch");

dotenv.config();
database.config();

const app = express();

app.use(cors());
app.use(express.json());
// app.use((_req: Request, res: Response, next: NextFunction) => {
//   const registerStatus = localStorage.getItem(REGISTER_STATE_KEY);
//   res.setHeader("register-state", registerStatus ?? RegisterState.START);
//   next();
// });
app.use("/users", usersRoutes);
app.use("/groups", groupRoutes);
app.use("/doubles", doubleRoutes);
app.use("/singles", singleRoutes);
app.get("/registerStatus", (_req: Request, res: Response) => {
  const registerStatus =
    localStorage.getItem(REGISTER_STATE_KEY) ?? RegisterStatus.NO_GROUPS;
  res.send({ registerStatus });
});

app.post(
  "/registerStatus",
  (req: Request<{}, {}, { registerStatus: RegisterStatus }>, res: Response) => {
    const registerStatus = req.body.registerStatus;
    localStorage.setItem(REGISTER_STATE_KEY, registerStatus);
    res.send({ registerStatus });
  }
);

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});
