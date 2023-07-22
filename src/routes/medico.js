
import { Router } from "express";
const router = Router();
import {
  createMedico,
  getAllMedicos,
  getMedico,
  deleteMedico,
  updateMedico,
} from "../controllers/medicoController.js";

router.get("/", getAllMedicos);

router.get("/:id", getMedico);

router.post("/", createMedico);

router.put("/:id", updateMedico);

router.delete("/:id", deleteMedico);

export default router;
