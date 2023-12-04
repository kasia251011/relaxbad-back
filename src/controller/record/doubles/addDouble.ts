import mongoose from "mongoose";
import UserSchema from "../../../model/User";
import { GroupType } from "../../../model/common";
import DoubleSchema, { Double } from "../../../model/record/Double";
import { Response, Request } from "express";

export const addDouble = async (
  req: Request<{}, {}, Double, { groupType: GroupType }>,
  res: Response
) => {
  const double = new DoubleSchema({
    id: new mongoose.Types.ObjectId(),
    ...req.body,
  });

  try {
    if (req.query.groupType === "DOUBLE") {
      await UserSchema.findByIdAndUpdate(double.playerId1, {
        doubleId: double.id,
      });
      await UserSchema.findByIdAndUpdate(double.playerId2, {
        doubleId: double.id,
      });
    }

    if (req.query.groupType === "MIX") {
      await UserSchema.findByIdAndUpdate(double.playerId1, {
        mixId: double.id,
      });
      await UserSchema.findByIdAndUpdate(double.playerId2, {
        mixId: double.id,
      });
    }

    const doubleRes = await double.save();
    res.status(201).json(doubleRes);
  } catch (error) {
    res.status(500).json(error);
  }
};
