require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('../config/database');
const Product = require('../models/Product');
const Requirement = require('../models/Requirement');

// Products data
const products = [
  {
    id: 'litmus-edge',
    name: 'Litmus Edge',
    vendor: 'Litmus',
    category: 'Edge Computing',
    description: 'Industrial edge computing platform for real-time data processing and analytics',
    features: [
      'Real-time data processing',
      'OPC UA support',
      'Edge analytics',
      'Local data storage',
      'Cloud connectivity',
      'Security features'
    ],
    useCases: [
      'Manufacturing automation',
      'Predictive maintenance',
      'Quality control',
      'Energy management'
    ],
    pros: [
      'Excellent real-time performance',
      'Strong edge computing capabilities',
      'Good protocol support',
      'Easy deployment'
    ],
    cons: [
      'Limited cloud features',
      'Higher cost for large deployments',
      'Steep learning curve'
    ],
    pricing: 'Contact sales',
    website: 'https://litmus.io'
  },
  {
    id: 'litmus-cloud',
    name: 'Litmus Cloud',
    vendor: 'Litmus',
    category: 'Cloud Platform',
    description: 'Cloud-based industrial IoT platform with advanced analytics',
    features: [
      'Cloud-native architecture',
      'Advanced analytics',
      'Machine learning',
      'Multi-tenant support',
      'API-first design',
      'Global deployment'
    ],
    useCases: [
      'Large-scale IoT deployments',
      'Multi-site operations',
      'Advanced analytics',
      'Enterprise integration'
    ],
    pros: [
      'Excellent scalability',
      'Advanced analytics',
      'Global availability',
      'Strong API support'
    ],
    cons: [
      'Requires internet connectivity',
      'Ongoing subscription costs',
      'Data sovereignty concerns'
    ],
    pricing: 'Subscription-based',
    website: 'https://litmus.io'
  },
  {
    id: 'belden-hirschmann',
    name: 'Hirschmann Industrial Ethernet',
    vendor: 'Belden',
    category: 'Network Infrastructure',
    description: 'Industrial-grade networking solutions for harsh environments',
    features: [
      'Rugged design',
      'Industrial protocols',
      'Redundancy support',
      'Network management',
      'Security features',
      'Wide temperature range'
    ],
    useCases: [
      'Industrial networking',
      'Factory automation',
      'SCADA systems',
      'Process control'
    ],
    pros: [
      'Highly reliable',
      'Industrial-grade',
      'Excellent support',
      'Wide protocol support'
    ],
    cons: [
      'Higher cost',
      'Complex configuration',
      'Limited software features'
    ],
    pricing: 'Hardware + support',
    website: 'https://belden.com'
  },
  {
    id: 'belden-garrettcom',
    name: 'GarrettCom Network Solutions',
    vendor: 'Belden',
    category: 'Network Security',
    description: 'Secure networking equipment for critical infrastructure',
    features: [
      'Network security',
      'Firewall capabilities',
      'VPN support',
      'Intrusion detection',
      'Compliance features',
      'Managed services'
    ],
    useCases: [
      'Secure networking',
      'Critical infrastructure',
      'SCADA security',
      'Remote access'
    ],
    pros: [
      'Strong security',
      'Industrial focus',
      'Good compliance',
      'Reliable hardware'
    ],
    cons: [
      'Expensive',
      'Limited software',
      'Complex setup'
    ],
    pricing: 'Hardware + support',
    website: 'https://belden.com'
  },
  {
    id: 'highbyte-intellicore',
    name: 'IntelliCore',
    vendor: 'Highbyte',
    category: 'Data Integration',
    description: 'Industrial data integration platform for unified namespace',
    features: [
      'OPC UA support',
      'Data modeling',
      'Protocol translation',
      'Edge computing',
      'Cloud connectivity',
      'Real-time processing'
    ],
    useCases: [
      'Data integration',
      'Protocol translation',
      'Unified namespace',
      'Edge computing'
    ],
    pros: [
      'Excellent data integration',
      'Strong OPC UA support',
      'Flexible deployment',
      'Good documentation'
    ],
    cons: [
      'Limited analytics',
      'Smaller ecosystem',
      'Less brand recognition'
    ],
    pricing: 'Per-device licensing',
    website: 'https://highbyte.com'
  },
  {
    id: 'highbyte-datahub',
    name: 'DataHub',
    vendor: 'Highbyte',
    category: 'Data Management',
    description: 'Industrial data hub for collecting and distributing operational data',
    features: [
      'Data collection',
      'Real-time distribution',
      'OPC UA support',
      'Data modeling',
      'Security features',
      'Scalable architecture'
    ],
    useCases: [
      'Data collection',
      'Real-time distribution',
      'SCADA integration',
      'Data modeling'
    ],
    pros: [
      'Excellent data handling',
      'Strong OPC UA support',
      'Good performance',
      'Flexible deployment'
    ],
    cons: [
      'Limited cloud features',
      'Smaller company',
      'Less enterprise features'
    ],
    pricing: 'Per-connection licensing',
    website: 'https://highbyte.com'
  }
];

// Requirements data (sample - you'll need to add all from frontend/src/data/requirements.ts)
const requirements = [
  {
    id: 'data_collection',
    question: 'Do you need to collect data from multiple industrial devices?',
    description: 'Real-time data collection from sensors, PLCs, and other industrial equipment',
    category: 'Data Management',
    importance: 'critical',
    tags: ['IoT', 'Data Collection', 'Real-time'],
    options: ['Yes', 'No']
  },
  {
    id: 'cloud_deployment',
    question: 'Which deployment do you prefer?',
    description: 'Choosing between cloud scalability and on-premise control',
    category: 'Infrastructure',
    importance: 'critical',
    tags: ['Cloud', 'On-premise', 'Deployment'],
    options: ['Cloud', 'On-premise']
  },
  {
    id: 'protocol_support',
    question: 'Do you need support for multiple industrial protocols?',
    description: 'Support for OPC UA, MQTT, Modbus, and other industrial protocols',
    category: 'Connectivity',
    importance: 'critical',
    tags: ['Protocols', 'OPC UA', 'MQTT', 'Modbus'],
    options: ['Yes', 'No']
  },
  {
    id: 'security_compliance',
    question: 'Do you need compliance with industrial security standards?',
    description: 'Meeting cybersecurity standards for industrial systems',
    category: 'Security',
    importance: 'critical',
    tags: ['Security', 'Compliance', 'Cybersecurity'],
    options: ['Yes', 'No']
  }
  // Add more requirements here as needed
];

async function seed() {
  try {
    // Connect to database
    await connectDB();
    
    console.log('Seeding database...');
    
    // Clear existing data
    await Product.deleteMany({});
    await Requirement.deleteMany({});
    console.log('Cleared existing data');
    
    // Insert products
    const insertedProducts = await Product.insertMany(products);
    console.log(`Inserted ${insertedProducts.length} products`);
    
    // Insert requirements
    const insertedRequirements = await Requirement.insertMany(requirements);
    console.log(`Inserted ${insertedRequirements.length} requirements`);
    
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
