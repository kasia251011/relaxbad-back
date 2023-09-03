import mongoose from 'mongoose';
import GroupSchema, {Group} from "../model/Group";
import { Request, Response } from "express";

export const getAllGroups = (_req: Request, res: Response) => {
  return GroupSchema.find()
    .then((groups) => { res.status(201).json( groups ) })
    .catch((error) => { res.status(500).json({ error }) })
};

export const addGroup = (req: Request<{}, {}, Group>, res: Response) => {
  const group = new GroupSchema({
    id: new mongoose.Types.ObjectId(),
    ...req.body
  })

  return group.save()
    .then((group) => { res.status(201).json({ group }) })
    .catch((error) => { res.status(500).json({ error }) })
};

export const getGroup = (req: Request<{id: string}>, res: Response) => {
  return GroupSchema.findById(req.params.id)
    .then((group) => { res.status(201).json( group ) })
    .catch((error) => { res.status(500).json({ error }) })
};

export const deleteGroup = (req: Request<{id: string}>, res: Response) => {
  return GroupSchema.findByIdAndDelete(req.params.id)
    .then((group) => { res.status(201).json( group ) })
    .catch((error) => { res.status(500).json({ error }) })
};

export const updateGroup = (req: Request<{id: string}>, res: Response) => {
  return GroupSchema.findByIdAndUpdate(req.params.id, ...req.body)
    .then((group) => { res.status(201).json( group ) })
    .catch((error) => { res.status(500).json({ error }) })
};