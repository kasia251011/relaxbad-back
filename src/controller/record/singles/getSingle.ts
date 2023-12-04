import SingleSchema, { Single } from "../../../model/record/Single";
import { Request, Response } from "express";

export const getSingle = (
  req: Request<{ id: string }>,
  res: Response<Single>
) => {
  return SingleSchema.findById(req.params.id)
    .then((single) => {
      res.status(201).json(single?.toObject());
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
