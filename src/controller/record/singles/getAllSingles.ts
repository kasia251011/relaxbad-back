import SingleSchema, { Single } from "../../../model/record/Single";
import { Request, Response } from "express";

export const getAllSingles = async (req: Request, res: Response) => {
  let singles: Single[] = [];
  try {
    if (req.query.groupId) {
      singles = await SingleSchema.find({ groupId: req.query.groupId });
      res.status(201).json(singles);
      return;
    }

    singles = await SingleSchema.find();
    res.status(201).json(singles);
  } catch (error) {
    res.status(500).json(error);
  }
};
