import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import requirementRoutes from "./routes/requirementRoutes.js";

dotenv.config();
const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (req, res) => res.json({ status: "OK", message: "Backend running smoothly" }));
app.use("/api/products", productRoutes);
app.use("/api/requirements", requirementRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
