import mongoose from "mongoose";
import SingleSchema, { Single } from "../../../model/record/Single";
import UserSchema from "../../../model/User";
import { Request, Response } from "express";

export const addSingle = async (
  req: Request<{}, {}, Single>,
  res: Response
) => {
  const single = new SingleSchema({
    id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  try {
    await UserSchema.findByIdAndUpdate(single.playerId, {
      singleId: single.id,
    });
    const singleRes = await single.save();
    res.status(201).json(singleRes);
  } catch (error) {
    res.status(500).json(error);
  }
};
