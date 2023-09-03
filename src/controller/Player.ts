import Player from "../model/Player";
import { Request, Response } from "express";

export const getAllPlayers = (_req: Request, res: Response) => {

  return Player.find()
    .then((players) => { res.status(201).json( players ) })
    .catch((error) => { res.status(500).json({ error }) })
};