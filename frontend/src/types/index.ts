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

export interface Recommendation {
  product: Product;
  score: number;
  reasons: string[];
  bestFor: string[];
}

export interface AssessmentResult {
  requirements: Record<string, boolean>;
  recommendations: Recommendation[];
  summary: string;
  nextSteps: string[];
}

export interface CompanyProfile {
  industry: string;
  size: 'small' | 'medium' | 'large';
  budget: 'low' | 'medium' | 'high';
  timeline: 'immediate' | 'short-term' | 'long-term';
  expertise: 'beginner' | 'intermediate' | 'advanced';
} 