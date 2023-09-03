import { addGroup, deleteGroup, getAllGroups, getGroup, updateGroup } from "../controller/Group"
import express from "express"

const router = express.Router()

router.get('', getAllGroups);
router.get('/:id', getGroup);
router.post('', addGroup);
router.delete('/:id', deleteGroup);
router.put('/:id', updateGroup);

export default router;