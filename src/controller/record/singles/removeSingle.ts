import SingleSchema from "../../../model/record/Single";
import UserSchema from "../../../model/User";
import { Request, Response } from "express";

export const removeSingle = async (
  req: Request<{ id: string }>,
  res: Response
) => {
  try {
    await UserSchema.findOneAndUpdate(
      { singleId: req.params.id },
      {
        singleId: null,
      }
    );

    const singleRes = await SingleSchema.findByIdAndDelete(req.params.id);
    res.status(201).json(singleRes);
  } catch (error) {
    res.status(500).json(error);
  }
};
