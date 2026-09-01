import express from "express";
import {
  getRequirements,
  getRequirementById,
  createRequirement,
  updateRequirement,
  deleteRequirement,
} from "../controllers/requirementController.js";

const router = express.Router();

router.route("/").get(getRequirements).post(createRequirement);
router.route("/:id").get(getRequirementById).put(updateRequirement).delete(deleteRequirement);

export default router;
