
import { Router } from "express";
const router = Router();
import {
  createCama,
  getAllCamas,
  getCama,
  updateCama,
  deleteCama,
} from "../controllers/camaController.js";

router.get("/", getAllCamas);

router.get("/:id", getCama);

router.post("/", createCama);

router.put("/:id", updateCama);

router.delete("/:id", deleteCama);

export default router;
