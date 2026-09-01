import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vendor: { type: String, required: true },
  category: { type: String, required: true },
  description: { type: String },
  features: [{ type: String }],
  priceRange: { type: String },
});

export default mongoose.model("Product", productSchema);
