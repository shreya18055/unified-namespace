export interface Requirement {
  id: string;
  question: string;
  description: string;
  category: string;
  importance: 'critical' | 'high' | 'medium' | 'low';
  tags: string[];
  options?: [string, string];
}

export const requirements: Requirement[] = [
  // Data Management
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
    id: 'data_storage',
    question: 'Do you require long-term data storage and historical analysis?',
    description: 'Storing and analyzing historical data for trends and insights',
    category: 'Data Management',
    importance: 'high',
    tags: ['Data Storage', 'Analytics', 'Historical Data'],
    options: ['Yes', 'No']
  },
  {
    id: 'data_processing',
    question: 'Do you need real-time data processing and analytics?',
    description: 'Processing data streams for immediate insights and decision making',
    category: 'Data Management',
    importance: 'high',
    tags: ['Real-time', 'Analytics', 'Processing'],
    options: ['Yes', 'No']
  },

  // Infrastructure
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
    id: 'edge_computing',
    question: 'Do you need edge computing capabilities?',
    description: 'Processing data closer to the source for reduced latency',
    category: 'Infrastructure',
    importance: 'medium',
    tags: ['Edge Computing', 'Latency', 'Local Processing'],
    options: ['Yes', 'No']
  },
  {
    id: 'scalability',
    question: 'Do you need to scale to thousands of devices?',
    description: 'Supporting large-scale industrial IoT deployments',
    category: 'Infrastructure',
    importance: 'high',
    tags: ['Scalability', 'Large Scale', 'IoT'],
    options: ['Yes', 'No']
  },

  // Connectivity
  {
    id: 'protocol_support',
    question: 'Do you need support for multiple industrial protocols?',
    description: 'Supporting OPC UA, Modbus, Profinet, and other industrial protocols',
    category: 'Connectivity',
    importance: 'critical',
    tags: ['OPC UA', 'Modbus', 'Profinet', 'Protocols'],
    options: ['Yes', 'No']
  },
  {
    id: 'network_integration',
    question: 'Do you need to integrate with existing network infrastructure?',
    description: 'Seamless integration with current IT/OT networks',
    category: 'Connectivity',
    importance: 'high',
    tags: ['Network', 'Integration', 'IT/OT'],
    options: ['Yes', 'No']
  },
  {
    id: 'wireless_connectivity',
    question: 'Which connectivity do you need?',
    description: 'Support for WiFi, cellular, and other wireless technologies',
    category: 'Connectivity',
    importance: 'medium',
    tags: ['Wireless', 'WiFi', 'Cellular'],
    options: ['Wireless', 'Wired']
  },

  // Security
  {
    id: 'security_compliance',
    question: 'Do you need compliance with industrial security standards?',
    description: 'Meeting IEC 62443, NIST, and other security frameworks',
    category: 'Security',
    importance: 'critical',
    tags: ['Security', 'Compliance', 'IEC 62443'],
    options: ['Yes', 'No']
  },
  {
    id: 'data_encryption',
    question: 'Do you require end-to-end data encryption?',
    description: 'Encrypting data in transit and at rest',
    category: 'Security',
    importance: 'high',
    tags: ['Encryption', 'Data Security', 'Privacy'],
    options: ['Yes', 'No']
  },
  {
    id: 'access_control',
    question: 'Do you need role-based access control?',
    description: 'Managing user permissions and access levels',
    category: 'Security',
    importance: 'high',
    tags: ['Access Control', 'User Management', 'Permissions'],
    options: ['Yes', 'No']
  },

  // Integration
  {
    id: 'erp_integration',
    question: 'Do you need integration with ERP systems?',
    description: 'Connecting with SAP, Oracle, and other enterprise systems',
    category: 'Integration',
    importance: 'medium',
    tags: ['ERP', 'SAP', 'Oracle', 'Enterprise'],
    options: ['Yes', 'No']
  },
  {
    id: 'scada_integration',
    question: 'Do you need SCADA system integration?',
    description: 'Integrating with existing SCADA and HMI systems',
    category: 'Integration',
    importance: 'high',
    tags: ['SCADA', 'HMI', 'Control Systems'],
    options: ['Yes', 'No']
  },
  {
    id: 'api_support',
    question: 'Do you need REST API or GraphQL support?',
    description: 'Programmatic access to data and services',
    category: 'Integration',
    importance: 'medium',
    tags: ['API', 'REST', 'GraphQL', 'Development'],
    options: ['Yes', 'No']
  },

  // Performance
  {
    id: 'high_availability',
    question: 'Do you need 99.9%+ uptime guarantees?',
    description: 'Ensuring continuous operation with minimal downtime',
    category: 'Performance',
    importance: 'critical',
    tags: ['High Availability', 'Uptime', 'Reliability'],
    options: ['Yes', 'No']
  },
  {
    id: 'low_latency',
    question: 'Do you require sub-second response times?',
    description: 'Real-time performance for critical operations',
    category: 'Performance',
    importance: 'high',
    tags: ['Low Latency', 'Real-time', 'Performance'],
    options: ['Yes', 'No']
  },
  {
    id: 'data_throughput',
    question: 'Do you need to handle high data throughput?',
    description: 'Processing large volumes of data efficiently',
    category: 'Performance',
    importance: 'medium',
    tags: ['Throughput', 'Data Volume', 'Performance'],
    options: ['Yes', 'No']
  },

  // Compliance
  {
    id: 'industry_standards',
    question: 'Do you need compliance with industry-specific standards?',
    description: 'Meeting FDA, ISO, and other regulatory requirements',
    category: 'Compliance',
    importance: 'high',
    tags: ['Compliance', 'FDA', 'ISO', 'Regulations'],
    options: ['Yes', 'No']
  },
  {
    id: 'audit_trail',
    question: 'Do you need comprehensive audit trails?',
    description: 'Tracking all system activities for compliance',
    category: 'Compliance',
    importance: 'medium',
    tags: ['Audit Trail', 'Compliance', 'Tracking'],
    options: ['Yes', 'No']
  },

  // Scalability
  {
    id: 'device_scale',
    question: 'Do you plan to connect 1000+ devices?',
    description: 'Large-scale IoT deployment planning',
    category: 'Scalability',
    importance: 'medium',
    tags: ['Scale', 'IoT', 'Devices'],
    options: ['Yes', 'No']
  },
  {
    id: 'geographic_scale',
    question: 'Do you need multi-site deployment?',
    description: 'Managing IoT across multiple locations',
    category: 'Scalability',
    importance: 'medium',
    tags: ['Multi-site', 'Geographic', 'Deployment'],
    options: ['Yes', 'No']
  },

  // Support
  {
    id: 'technical_support',
    question: 'Do you need 24/7 technical support?',
    description: 'Round-the-clock support for critical operations',
    category: 'Support',
    importance: 'high',
    tags: ['Support', '24/7', 'Technical'],
    options: ['Yes', 'No']
  },
  {
    id: 'training_services',
    question: 'Do you need training and implementation services?',
    description: 'Professional services for deployment and training',
    category: 'Support',
    importance: 'medium',
    tags: ['Training', 'Services', 'Implementation'],
    options: ['Yes', 'No']
  },

  // Automotive Requirements
  {
    id: 'can_bus_support',
    question: 'Do you require CAN bus protocol support?',
    description: 'Support for Controller Area Network (CAN) bus, common in automotive systems',
    category: 'Automotive Requirements',
    importance: 'high',
    tags: ['CAN', 'Automotive', 'Protocol'],
    options: ['Yes', 'No']
  },
  {
    id: 'vehicle_telemetry',
    question: 'Is real-time vehicle telemetry integration needed?',
    description: 'Integration with vehicle sensors and real-time data streams',
    category: 'Automotive Requirements',
    importance: 'critical',
    tags: ['Telemetry', 'Automotive', 'Real-time'],
    options: ['Yes', 'No']
  },
  {
    id: 'iso_26262',
    question: 'Do you need compliance with automotive standards (ISO 26262, AUTOSAR)?',
    description: 'Ensuring solutions meet automotive safety and software standards',
    category: 'Automotive Requirements',
    importance: 'high',
    tags: ['ISO 26262', 'AUTOSAR', 'Compliance'],
    options: ['Yes', 'No']
  },
  {
    id: 'ota_updates',
    question: 'Is over-the-air (OTA) update support required?',
    description: 'Ability to update vehicle software remotely',
    category: 'Automotive Requirements',
    importance: 'medium',
    tags: ['OTA', 'Updates', 'Automotive'],
    options: ['Yes', 'No']
  },
  {
    id: 'infotainment_integration',
    question: 'Do you need integration with in-vehicle infotainment systems?',
    description: 'Connecting to and managing infotainment platforms in vehicles',
    category: 'Automotive Requirements',
    importance: 'medium',
    tags: ['Infotainment', 'Integration', 'Automotive'],
    options: ['Yes', 'No']
  },
  {
    id: 'vehicle_diagnostics',
    question: 'Is advanced vehicle diagnostics required?',
    description: 'Support for OBD-II and other vehicle diagnostic protocols',
    category: 'Automotive Requirements',
    importance: 'medium',
    tags: ['Diagnostics', 'OBD-II', 'Automotive'],
    options: ['Yes', 'No']
  },
];

export const getRequirementsByCategory = () => {
  const categories: Record<string, Requirement[]> = {};
  requirements.forEach(req => {
    if (!categories[req.category]) {
      categories[req.category] = [];
    }
    categories[req.category].push(req);
  });
  return categories;
}; 