import UserSchema, { User } from "../../model/User";
import { Request, Response } from "express";

export const updateUser = (
  req: Request<{ id: string }, {}, User>,
  res: Response
) => {
  return UserSchema.findByIdAndUpdate(req.params.id, req.body)
    .then((user) => {
      res.status(201).json(user);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
