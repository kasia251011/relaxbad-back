import GroupSchema, { Group } from "../../model/Group";
import { Request, Response } from "express";

export const getAllGroups = async (req: Request, res: Response) => {
  let groups: Group[] = [];

  try {
    if (req.query.type) {
      groups = await GroupSchema.find({ type: req.query.type });
      res.status(201).json(groups);
      return;
    }

    groups = await GroupSchema.find();
    res.status(201).json(groups);
  } catch (error) {
    res.status(500).json(error);
  }
};
