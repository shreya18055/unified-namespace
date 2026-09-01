import mongoose from "mongoose";

const requirementSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  question: { type: String, required: true },
  description: { type: String },
  category: { type: String },
  importance: { type: String, enum: ["low", "medium", "high", "critical"], default: "medium" },
  tags: [String],
  options: [String],
});

export default mongoose.model("Requirement", requirementSchema);
