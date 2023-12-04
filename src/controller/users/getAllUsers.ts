import UserSchema, { User } from "../../model/User";
import { Request, Response } from "express";
import { Gender, GroupType, Role } from "../../model/common";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserSchema.find();
    res.status(201).json(users);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUsersAvailableForMix = async (
  req: Request<{}, { gender: Gender }, {}>,
  res: Response
) => {
  try {
    const gender = req.query.gender;

    const filter = gender
      ? {
          gender,
          mixId: undefined,
        }
      : { mixId: undefined };

    const users = await UserSchema.find(filter);
    res.status(201).json(users);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUsersAvailableForDouble = async (
  req: Request<{}, { gender: Gender }, {}>,
  res: Response
) => {
  try {
    const gender = req.query.gender;
    const filter = gender
      ? {
          gender,
          doubleId: undefined,
        }
      : { doubleId: undefined };

    const users = await UserSchema.find(filter);
    res.status(201).json(users);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllUsersAvailableForSingle = async (
  req: Request<{}, { gender: Gender }, {}>,
  res: Response
) => {
  try {
    const gender = req.query.gender;
    const filter = gender
      ? {
          gender,
          singleId: undefined,
        }
      : { singleId: undefined };

    const users = await UserSchema.find(filter);
    res.status(201).json(users);
    return;
  } catch (error) {
    res.status(500).json(error);
  }
};
