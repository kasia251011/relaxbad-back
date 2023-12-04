import UserSchema from "../../model/User";
import { Request, Response } from "express";

export const getUser = (req: Request<{ id: string }>, res: Response) => {
  return UserSchema.findById(req.params.id)
    .then((group) => {
      res.status(201).json(group);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
