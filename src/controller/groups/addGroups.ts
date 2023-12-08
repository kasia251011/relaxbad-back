import { REGISTER_STATE_KEY } from "../..";
import GroupSchema, { Group } from "../../model/Group";
import { Request, Response } from "express";
import { RegisterStatus } from "../../model/common";
import { localStorage } from "../..";

export const addGroups = async (
  req: Request<{}, {}, Group[]>,
  res: Response
) => {
  localStorage.setItem(REGISTER_STATE_KEY, RegisterStatus.USERS_REGISTER);
  return GroupSchema.insertMany<Group>(req.body)
    .then((groups) => {
      res.status(201).json(groups);
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};
