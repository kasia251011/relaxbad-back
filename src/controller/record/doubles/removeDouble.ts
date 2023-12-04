import UserSchema from "../../../model/User";
import { GroupType } from "../../../model/common";
import DoubleSchema from "../../../model/record/Double";
import { Request, Response } from "express";

export const removeDouble = async (
  req: Request<{ id: string }, {}, {}, { groupType: GroupType }>,
  res: Response
) => {
  try {
    if (req.query.groupType === "DOUBLE") {
      //FIRST PLAYER
      await UserSchema.findOneAndUpdate(
        { doubleId: req.params.id },
        {
          doubleId: null,
        }
      );
      //SECOND PLAYER
      await UserSchema.findOneAndUpdate(
        { doubleId: req.params.id },
        {
          doubleId: null,
        }
      );
    }

    if (req.query.groupType === "MIX") {
      //FIRST PLAYER
      await UserSchema.findOneAndUpdate(
        { mixId: req.params.id },
        {
          mixId: null,
        }
      );
      //SECOND PLAYER
      await UserSchema.findOneAndUpdate(
        { mixId: req.params.id },
        {
          mixId: null,
        }
      );
    }

    const doubleRes = await DoubleSchema.findByIdAndDelete(req.params.id);
    res.status(201).json(doubleRes);
  } catch (error) {
    res.status(500).json(error);
  }
};
