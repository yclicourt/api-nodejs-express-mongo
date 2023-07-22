
import { Router } from "express";
import {
  createPacientes,
  deletePacientes,
  getAllPacientes,
  getPaciente,
  updatePacientes,
} from "../controllers/pacienteController.js";

const router = Router();

router.get("/", getAllPacientes);

router.get("/:id", getPaciente);

router.post("/", createPacientes);

router.put("/:id", updatePacientes);

router.delete("/:id", deletePacientes);

export default router;
