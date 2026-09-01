export interface Product {
  id: string;
  name: string;
  vendor: string;
  category: string;
  description: string;
  features: string[];
  useCases: string[];
  pros: string[];
  cons: string[];
  pricing: string;
  website: string;
}

export const products: Product[] = [
  // Litmus Products
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

  // Belden Products
  {
    id: 'belden-hirschmann',
    name: 'Hirschmann Industrial Ethernet',
    vendor: 'Belden',
    category: 'Network Infrastructure',
    description: 'Industrial-grade network infrastructure for harsh environments',
    features: [
      'Industrial Ethernet switches',
      'Fiber optic solutions',
      'Network redundancy',
      'Advanced security',
      'Ruggedized design',
      'Long-distance connectivity'
    ],
    useCases: [
      'Industrial networking',
      'Harsh environment deployment',
      'Network redundancy',
      'Long-distance connectivity'
    ],
    pros: [
      'Excellent reliability',
      'Harsh environment rated',
      'Strong security features',
      'Proven track record'
    ],
    cons: [
      'Higher cost',
      'Limited software features',
      'Complex configuration'
    ],
    pricing: 'Hardware + licensing',
    website: 'https://belden.com'
  },
  {
    id: 'belden-garrettcom',
    name: 'GarrettCom Network Solutions',
    vendor: 'Belden',
    category: 'Network Security',
    description: 'Secure network infrastructure for critical industrial applications',
    features: [
      'Industrial firewalls',
      'Network segmentation',
      'Intrusion detection',
      'VPN capabilities',
      'Ruggedized design',
      'Compliance features'
    ],
    useCases: [
      'Critical infrastructure',
      'Security-focused deployments',
      'Compliance requirements',
      'Network segmentation'
    ],
    pros: [
      'Excellent security features',
      'Compliance ready',
      'Ruggedized design',
      'Strong support'
    ],
    cons: [
      'Higher cost',
      'Complex setup',
      'Limited flexibility'
    ],
    pricing: 'Hardware + support',
    website: 'https://belden.com'
  },

  // Highbyte Products
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