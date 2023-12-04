import DoubleSchema from "../../../model/record/Double";
import { Request, Response } from "express";

export const getDouble = (req: Request<{ id: string }>, res: Response) => {
  return DoubleSchema.findById(req.params.id)
    .then((double) => {
      res.status(201).json(double);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};
