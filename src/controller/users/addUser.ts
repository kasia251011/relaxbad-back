import UserSchema, { User } from "../../model/User";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const addUser = async (req: Request<{}, {}, User>, res: Response) => {
  const user = new UserSchema({
    id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  try {
    const user_1 = await user.save();
    res.status(201).json(user_1);
  } catch (error) {
    res.status(500).json(error);
  }
};
