import { getUser } from "../controller/users/getUser";
import {
  getAllUsers,
  getAllUsersAvailableForDouble,
  getAllUsersAvailableForMix,
  getAllUsersAvailableForSingle,
} from "../controller/users/getAllUsers";
import { addUser } from "../controller/users/addUser";
import { updateUser } from "../controller/users/updateUser";
import express from "express";

const router = express.Router();

router.get("/availableForMix", getAllUsersAvailableForMix);
router.get("/availableForSingle", getAllUsersAvailableForSingle);
router.get("/availableForDouble", getAllUsersAvailableForDouble);
router.get("", getAllUsers);
router.get("/:id", getUser);
router.post("", addUser);
router.put("/:id", updateUser);

export default router;
