import express from "express";
import { addDouble } from "../../controller/record/doubles/addDouble";
import { getAllDoubles } from "../../controller/record/doubles/getAllDoubles";
import { getDouble } from "../../controller/record/doubles/getDouble";
import { removeDouble } from "../../controller/record/doubles/removeDouble";

const router = express.Router();

router.get("", getAllDoubles);
router.get("/:id", getDouble);
router.post("", addDouble);
router.delete("/:id", removeDouble);

export default router;
