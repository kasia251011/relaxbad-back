import GroupSchema, { Group } from "../../model/Group";
import { Request, Response } from "express";

export const getGroup = (req: Request<{ id: string }>, res: Response) => {
  return GroupSchema.findById(req.params.id)
    .then((group) => {
      res.status(201).json(group);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
