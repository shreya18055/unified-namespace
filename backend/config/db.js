import mongoose from "mongoose";
import Product from "../models/Product.js";
import Requirement from "../models/Requirement.js";

// ✅ Seed data for products
const products = [
  {
    id: "litmus-edge",
    name: "Litmus Edge",
    vendor: "Litmus",
    category: "Edge Computing",
    description:
      "Industrial edge computing platform for real-time data processing and analytics",
    features: [
      "Real-time data processing",
      "OPC UA support",
      "Edge analytics",
      "Local data storage",
      "Cloud connectivity",
      "Security features",
    ],
    useCases: [
      "Manufacturing automation",
      "Predictive maintenance",
      "Quality control",
      "Energy management",
    ],
    pros: [
      "Excellent real-time performance",
      "Strong edge computing capabilities",
      "Good protocol support",
      "Easy deployment",
    ],
    cons: [
      "Limited cloud features",
      "Higher cost for large deployments",
      "Steep learning curve",
    ],
    pricing: "Contact sales",
    website: "https://litmus.io",
  },
  {
    id: "belden-hirschmann",
    name: "Hirschmann Industrial Ethernet",
    vendor: "Belden",
    category: "Network Infrastructure",
    description:
      "Industrial-grade networking solutions for harsh environments",
    features: [
      "Rugged design",
      "Industrial protocols",
      "Redundancy support",
      "Network management",
      "Security features",
      "Wide temperature range",
    ],
    useCases: [
      "Industrial networking",
      "Factory automation",
      "SCADA systems",
      "Process control",
    ],
    pros: [
      "Highly reliable",
      "Industrial-grade",
      "Excellent support",
      "Wide protocol support",
    ],
    cons: [
      "Higher cost",
      "Complex configuration",
      "Limited software features",
    ],
    pricing: "Hardware + support",
    website: "https://belden.com",
  },
  {
    id: "highbyte-datahub",
    name: "DataHub",
    vendor: "Highbyte",
    category: "Data Management",
    description:
      "Industrial data hub for collecting and distributing operational data",
    features: [
      "Data collection",
      "Real-time distribution",
      "OPC UA support",
      "Data modeling",
      "Security features",
      "Scalable architecture",
    ],
    useCases: [
      "Data collection",
      "Real-time distribution",
      "SCADA integration",
      "Data modeling",
    ],
    pros: [
      "Excellent data handling",
      "Strong OPC UA support",
      "Good performance",
      "Flexible deployment",
    ],
    cons: [
      "Limited cloud features",
      "Smaller company",
      "Less enterprise features",
    ],
    pricing: "Per-connection licensing",
    website: "https://highbyte.com",
  },
];

// ✅ Seed data for requirements
const requirements = [
  {
    id: "data_collection",
    question: "Do you need to collect data from multiple industrial devices?",
    description:
      "Real-time data collection from sensors, PLCs, and other industrial equipment",
    category: "Data Management",
    importance: "critical",
    tags: ["IoT", "Data Collection", "Real-time"],
    options: ["Yes", "No"],
  },
  {
    id: "cloud_deployment",
    question: "Which deployment do you prefer?",
    description: "Choosing between cloud scalability and on-premise control",
    category: "Infrastructure",
    importance: "critical",
    tags: ["Cloud", "On-premise", "Deployment"],
    options: ["Cloud", "On-premise"],
  },
  {
    id: "protocol_support",
    question: "Do you need support for multiple industrial protocols?",
    description:
      "Support for OPC UA, MQTT, Modbus, and other industrial protocols",
    category: "Connectivity",
    importance: "critical",
    tags: ["Protocols", "OPC UA", "MQTT", "Modbus"],
    options: ["Yes", "No"],
  },
  {
    id: "security_compliance",
    question: "Do you need compliance with industrial security standards?",
    description: "Meeting cybersecurity standards for industrial systems",
    category: "Security",
    importance: "critical",
    tags: ["Security", "Compliance", "Cybersecurity"],
    options: ["Yes", "No"],
  },
];

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // 🧩 Auto-seed logic
    const productCount = await Product.countDocuments();
    const requirementCount = await Requirement.countDocuments();

    if (productCount === 0 && requirementCount === 0) {
      await Product.insertMany(products);
      await Requirement.insertMany(requirements);
      console.log("🌱 Database seeded with initial products and requirements!");
    } else {
      console.log("✅ Database already contains data. Skipping seeding.");
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
