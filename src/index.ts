// require('dotenv').config();
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import usersRoutes from "./routes/User";
import groupRoutes from "./routes/Group";
import doubleRoutes from "./routes/record/Double";
import singleRoutes from "./routes/record/Single";
import { initUsers } from "./data/players";
import { initGroups } from "./data/groups";

dotenv.config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString ?? "");
const database = mongoose.connection;

database.on("error", (error: any) => {
  console.log(error);
});

database.once("connected", async () => {
  try {
    await mongoose.connection.db.dropDatabase();
    // console.log('Dropped all collections');
  } catch (error) {
    console.log(error);
  }
  // console.log('Database Connected');

  initUsers();
  console.log("Users initialized");
  initGroups();
  console.log("Groups initialized");
});

const app = express();

app.use(cors());
app.use(express.json());
app.use("/users", usersRoutes);
app.use("/groups", groupRoutes);
app.use("/doubles", doubleRoutes);
app.use("/singles", singleRoutes);

app.listen(8080, () => {
  console.log(`Server Started at ${8080}`);
});
