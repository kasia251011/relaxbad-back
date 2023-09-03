import { getAllPlayers } from "../controller/Player"
import express from "express"

const router = express.Router()

router.get('', getAllPlayers);

export default router;