import GroupSchema, { Group } from "../../model/Group";
import { Request, Response } from "express";

export const addGroups = async (
  req: Request<{}, {}, Group[]>,
  res: Response
) => {
  return GroupSchema.insertMany<Group>(req.body)
    .then((groups) => {
      res.status(201).json(groups);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
