import DoubleSchema, { Double } from "../../../model/record/Double";
import { Request, Response } from "express";

export const getAllDoubles = async (req: Request, res: Response) => {
  let doubles: Double[] = [];

  const groupId = req.query.groupId;
  const filter = groupId
    ? {
        groupId,
      }
    : {};

  try {
    doubles = await DoubleSchema.find(filter);
    res.status(201).json(doubles);
  } catch (error) {
    res.status(500).json(error);
  }
};
