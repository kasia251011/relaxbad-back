import { addGroups } from "../controller/groups/addGroups";
import { getAllGroups } from "../controller/groups/getAllGroups";
import { getGroup } from "../controller/groups/getGroup";
import express from "express";

const router = express.Router();

router.get("", getAllGroups);
router.get("/:id", getGroup);
router.post("", addGroups);

export default router;
