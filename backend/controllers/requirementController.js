import Requirement from "../models/Requirement.js";

export const getRequirements = async (req, res) => {
  try {
    const requirements = await Requirement.find();
    res.json(requirements);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequirementById = async (req, res) => {
  try {
    const reqData = await Requirement.findById(req.params.id);
    if (!reqData) return res.status(404).json({ message: "Requirement not found" });
    res.json(reqData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createRequirement = async (req, res) => {
  try {
    const newReq = new Requirement(req.body);
    const saved = await newReq.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateRequirement = async (req, res) => {
  try {
    const updated = await Requirement.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteRequirement = async (req, res) => {
  try {
    await Requirement.findByIdAndDelete(req.params.id);
    res.json({ message: "Requirement deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
