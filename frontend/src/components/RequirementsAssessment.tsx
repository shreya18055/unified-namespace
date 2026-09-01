import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ArrowLeft, ArrowRight, Database, Shield, Network, Zap, BarChart3 } from 'lucide-react';
import { CompanyProfile, AssessmentResult } from '../types/index.ts';
import { requirements, Requirement } from '../data/requirements.ts';
import { calculateRecommendations, getRequirementsByCategory } from '../utils/assessment.ts';

interface RequirementsAssessmentProps {
  companyProfile: CompanyProfile;
  onComplete: (result: AssessmentResult) => void;
  onBack: () => void;
}

const RequirementsAssessment: React.FC<RequirementsAssessmentProps> = ({
  companyProfile,
  onComplete,
  onBack
}) => {
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [currentCategory, setCurrentCategory] = useState(0);
  const categories = Object.keys(getRequirementsByCategory());
  const currentCategoryRequirements = getRequirementsByCategory()[categories[currentCategory]] || [];

  const handleAnswer = (requirementId: string, answer: boolean) => {
    setAnswers(prev => ({
      ...prev,
      [requirementId]: answer
    }));
  };

  const handleComplete = () => {
    const result = calculateRecommendations(answers, companyProfile);
    onComplete(result);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Data Management': return Database;
      case 'Infrastructure': return Network;
      case 'Connectivity': return Network;
      case 'Security': return Shield;
      case 'Integration': return Zap;
      case 'Performance': return BarChart3;
      case 'Compliance': return Shield;
      case 'Scalability': return Network;
      case 'Support': return Zap;
      default: return Database;
    }
  };

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'critical': return 'text-blue-300 bg-gray-950 border-blue-700';
      case 'high': return 'text-blue-400 bg-gray-900 border-blue-600';
      case 'medium': return 'text-blue-500 bg-gray-900 border-blue-500';
      case 'low': return 'text-blue-700 bg-gray-900 border-blue-900';
      default: return 'text-blue-200 bg-gray-900 border-blue-800';
    }
  };

  const progress = (Object.keys(answers).length / requirements.length) * 100;

  const fordBlue = '#00a1e0';

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 mb-4"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Company Profile</span>
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Technical Requirements Assessment</h2>
          <p className="text-lg text-gray-600">
            Answer these questions to help us understand your technical needs
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-primary-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4 mb-8">
          {categories.map((category, index) => {
            const Icon = getCategoryIcon(category);
            const isActive = index === currentCategory;
            const isCompleted = getRequirementsByCategory()[category]?.every(
              req => answers[req.id] !== undefined
            );
            
            return (
              <button
                key={category}
                onClick={() => setCurrentCategory(index)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg'
                    : isCompleted
                    ? 'bg-green-100 text-green-700 border border-green-200'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category}</span>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={currentCategory}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="card p-8"
      >
        <div className="mb-6">
          <div className="flex items-center space-x-3 mb-4">
            {(() => {
              const Icon = getCategoryIcon(categories[currentCategory]);
              return <Icon className="h-6 w-6 text-primary-600" />;
            })()}
            <h3 className="text-xl font-semibold text-gray-900">
              {categories[currentCategory]}
            </h3>
          </div>
          <p className="text-gray-600">
            Answer the following questions about your {categories[currentCategory].toLowerCase()} requirements
          </p>
        </div>

        <div className="space-y-6">
          {currentCategoryRequirements.map((requirement) => {
            const [optionYes, optionNo] = requirement.options || ['Yes', 'No'];
            return (
              <div key={requirement.id} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-gray-900 mb-2">
                      {requirement.question}
                    </h4>
                    <p className="text-gray-600 mb-3">{requirement.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {requirement.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium bg-gray-950 border border-blue-800 text-blue-400 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full border ${getImportanceColor(
                      requirement.importance
                    )}`}
                  >
                    {requirement.importance}
                  </span>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => handleAnswer(requirement.id, true)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                      answers[requirement.id] === true
                        ? 'border-blue-500 bg-blue-900 text-blue-200'
                        : 'border-gray-700 hover:border-blue-700 hover:bg-blue-900'
                    }`}
                  >
                    <Check className="h-5 w-5" color={fordBlue} />
                    <span className="font-medium">{optionYes}</span>
                  </button>
                  <button
                    onClick={() => handleAnswer(requirement.id, false)}
                    className={`flex-1 flex items-center justify-center space-x-2 py-3 px-4 rounded-lg border-2 transition-all duration-200 ${
                      answers[requirement.id] === false
                        ? 'border-blue-800 bg-blue-950 text-blue-200'
                        : 'border-gray-700 hover:border-blue-800 hover:bg-blue-950'
                    }`}
                  >
                    <X className="h-5 w-5" color={fordBlue} />
                    <span className="font-medium">{optionNo}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      <div className="flex justify-between mt-8">
        <button
          onClick={() => setCurrentCategory(Math.max(0, currentCategory - 1))}
          disabled={currentCategory === 0}
          className="btn-secondary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Previous</span>
        </button>

        {currentCategory < categories.length - 1 ? (
          <button
            onClick={() => setCurrentCategory(currentCategory + 1)}
            className="btn-primary flex items-center space-x-2"
          >
            <span>Next Category</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleComplete}
            disabled={Object.keys(answers).length < requirements.length}
            className="btn-primary flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Get Recommendations</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RequirementsAssessment; 