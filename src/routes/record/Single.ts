import express from "express";
import { getAllSingles } from "../../controller/record/singles/getAllSingles";
import { getSingle } from "../../controller/record/singles/getSingle";
import { addSingle } from "../../controller/record/singles/addSingle";
import { removeSingle } from "../../controller/record/singles/removeSingle";

const router = express.Router();

router.get("", getAllSingles);
router.get("/:id", getSingle);
router.post("", addSingle);
router.delete("/:id", removeSingle);

export default router;
