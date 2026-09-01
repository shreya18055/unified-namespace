import { Requirement, Product, Recommendation, AssessmentResult, CompanyProfile } from '../types/index.ts';
import { requirements } from '../data/requirements.ts';
import { products } from '../data/products.ts';

export function calculateRecommendations(
  answers: Record<string, boolean>,
  companyProfile: CompanyProfile
): AssessmentResult {
  const recommendations: Recommendation[] = [];
  
  // Calculate scores for each product
  products.forEach(product => {
    let score = 0;
    const reasons: string[] = [];
    const bestFor: string[] = [];
    
    // Score based on requirement matches and product capabilities
    score = calculateProductScore(product, answers, companyProfile, reasons);
    
    // Determine best use cases
    if (score > 0) {
      bestFor.push(...product.useCases.slice(0, 3));
      
      // Add company-specific recommendations
      if (companyProfile.size === 'large' && product.vendor === 'Litmus') {
        bestFor.push('Enterprise-scale deployments');
      }
      if (companyProfile.budget === 'low' && product.vendor === 'Highbyte') {
        bestFor.push('Cost-effective solutions');
      }
      if (companyProfile.expertise === 'beginner' && product.vendor === 'Highbyte') {
        bestFor.push('Easy to implement');
      }
    }
    
    if (score > 0) {
      recommendations.push({
        product,
        score,
        reasons,
        bestFor
      });
    }
  });
  
  // Sort by score (highest first)
  recommendations.sort((a, b) => b.score - a.score);
  
  // Generate summary
  const summary = generateSummary(recommendations, companyProfile);
  
  // Generate next steps
  const nextSteps = generateNextSteps(recommendations, companyProfile);
  
  return {
    requirements: answers,
    recommendations,
    summary,
    nextSteps
  };
}

function calculateProductScore(
  product: Product,
  answers: Record<string, boolean>,
  companyProfile: CompanyProfile,
  reasons: string[]
): number {
  let score = 0;
  
  // Score based on product category and requirements
  requirements.forEach(requirement => {
    if (answers[requirement.id]) {
      // Check if product supports this requirement based on category and features
      if (matchesRequirement(product, requirement)) {
        score += getImportanceScore(requirement.importance);
        reasons.push(`Supports ${requirement.category.toLowerCase()}: ${requirement.question}`);
      }
    }
  });
  
  // Adjust score based on company profile
  score = adjustScoreForCompanyProfile(score, product, companyProfile);
  
  return Math.round(score);
}

function matchesRequirement(product: Product, requirement: Requirement): boolean {
  // Match based on product category and features
  const categoryMatch = product.category.toLowerCase().includes(requirement.category.toLowerCase()) ||
                       requirement.category.toLowerCase().includes(product.category.toLowerCase());
  
  // Check if product features support the requirement
  const featureMatch = product.features.some(feature => 
    requirement.tags.some(tag => 
      feature.toLowerCase().includes(tag.toLowerCase())
    )
  );
  
  return categoryMatch || featureMatch;
}

function getImportanceScore(importance: string): number {
  switch (importance) {
    case 'critical': return 10;
    case 'high': return 7;
    case 'medium': return 4;
    case 'low': return 2;
    default: return 1;
  }
}

function adjustScoreForCompanyProfile(
  score: number,
  product: Product,
  profile: CompanyProfile
): number {
  let adjustedScore = score;
  
  // Budget adjustments
  if (profile.budget === 'low' && product.vendor === 'Litmus') {
    adjustedScore *= 0.8; // Litmus is typically more expensive
  }
  if (profile.budget === 'high' && product.vendor === 'Highbyte') {
    adjustedScore *= 0.9; // Highbyte is typically more affordable
  }
  
  // Size adjustments
  if (profile.size === 'small' && product.vendor === 'Litmus') {
    adjustedScore *= 0.7; // Litmus is better for larger enterprises
  }
  if (profile.size === 'large' && product.vendor === 'Highbyte') {
    adjustedScore *= 0.8; // Highbyte is better for smaller to medium companies
  }
  
  // Expertise adjustments
  if (profile.expertise === 'beginner' && product.vendor === 'Litmus') {
    adjustedScore *= 0.6; // Litmus requires more expertise
  }
  if (profile.expertise === 'advanced' && product.vendor === 'Highbyte') {
    adjustedScore *= 0.9; // Highbyte is easier to use
  }
  
  // Timeline adjustments
  if (profile.timeline === 'immediate' && product.vendor === 'Litmus') {
    adjustedScore *= 0.8; // Litmus takes longer to implement
  }
  
  return Math.round(adjustedScore);
}

function generateSummary(recommendations: Recommendation[], profile: CompanyProfile): string {
  if (recommendations.length === 0) {
    return "Based on your requirements, we couldn't find a perfect match. Consider reviewing your requirements or contacting us for custom solutions.";
  }
  
  const topRecommendation = recommendations[0];
  const vendor = topRecommendation.product.vendor;
  
  let summary = `Based on your ${profile.industry} industry profile and requirements, `;
  
  if (vendor === 'Litmus') {
    summary += "Litmus solutions are highly recommended for your enterprise-scale needs. ";
    summary += "Their comprehensive edge computing and data management platforms provide the reliability and scalability you need.";
  } else if (vendor === 'Belden') {
    summary += "Belden's industrial networking solutions are ideal for your infrastructure requirements. ";
    summary += "Their proven track record in industrial environments ensures reliable connectivity and security.";
  } else if (vendor === 'Highbyte') {
    summary += "Highbyte's data integration and analytics solutions offer excellent value for your needs. ";
    summary += "Their user-friendly platforms and comprehensive protocol support make implementation straightforward.";
  }
  
  return summary;
}

function generateNextSteps(recommendations: Recommendation[], profile: CompanyProfile): string[] {
  const steps: string[] = [];
  
  if (recommendations.length > 0) {
    const topProduct = recommendations[0].product;
    
    steps.push(`Contact ${topProduct.vendor} for detailed pricing and technical consultation`);
    steps.push('Schedule a technical demonstration to see the solution in action');
    steps.push('Request a proof-of-concept pilot program');
  }
  
  steps.push('Review security and compliance requirements with your IT team');
  steps.push('Plan for implementation timeline and resource allocation');
  steps.push('Consider training and support requirements');
  
  if (profile.expertise === 'beginner') {
    steps.push('Plan for additional training and implementation support');
  }
  
  if (profile.timeline === 'immediate') {
    steps.push('Consider phased implementation approach for faster deployment');
  }
  
  return steps;
}

export function getRequirementsByCategory(): Record<string, Requirement[]> {
  const categories: Record<string, Requirement[]> = {};
  
  requirements.forEach(req => {
    if (!categories[req.category]) {
      categories[req.category] = [];
    }
    categories[req.category].push(req);
  });
  
  return categories;
} 