import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Building2, Users, DollarSign, Clock, GraduationCap, ArrowRight } from 'lucide-react';
import { CompanyProfile as CompanyProfileType } from '../types/index.ts';

interface CompanyProfileProps {
  onComplete: (profile: CompanyProfileType) => void;
}

const CompanyProfile: React.FC<CompanyProfileProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const { register, handleSubmit, formState: { errors } } = useForm<CompanyProfileType>();
  
  const onSubmit = (data: CompanyProfileType) => {
    onComplete(data);
  };

  const fordBlue = '#00a1e0';

  const renderStep1 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Tell Us About Your Company</h2>
        <p className="text-lg text-gray-600">Help us understand your needs to provide the best recommendations</p>
      </div>

      <div className="card p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry
            </label>
            <select
              {...register('industry', { required: 'Industry is required' })}
              className="input-field"
            >
              <option value="">Select your industry</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Oil & Gas">Oil & Gas</option>
              <option value="Chemical">Chemical</option>
              <option value="Pharmaceutical">Pharmaceutical</option>
              <option value="Food & Beverage">Food & Beverage</option>
              <option value="Mining">Mining</option>
              <option value="Utilities">Utilities</option>
              <option value="Transportation">Transportation</option>
              <option value="Other">Other</option>
            </select>
            {errors.industry && (
              <p className="text-red-500 text-sm mt-1">{errors.industry.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Size
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'small', label: 'Small (1-100 employees)', icon: Users },
                { value: 'medium', label: 'Medium (101-1000 employees)', icon: Building2 },
                { value: 'large', label: 'Large (1000+ employees)', icon: Building2 }
              ].map((option) => (
                <label key={option.value} className="relative">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('size', { required: 'Company size is required' })}
                    className="sr-only"
                  />
                  <div className="card p-4 cursor-pointer border-2 border-blue-900 hover:border-blue-500 transition-colors bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <option.icon className="h-5 w-5" color={fordBlue} />
                      <span className="text-sm font-medium text-blue-100">{option.label}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.size && (
              <p className="text-red-500 text-sm mt-1">{errors.size.message}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderStep2 = () => (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Details</h2>
        <p className="text-lg text-gray-600">Help us understand your project requirements and constraints</p>
      </div>

      <div className="card p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'low', label: 'Low Budget', icon: DollarSign },
                { value: 'medium', label: 'Medium Budget', icon: DollarSign },
                { value: 'high', label: 'High Budget', icon: DollarSign }
              ].map((option) => (
                <label key={option.value} className="relative">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('budget', { required: 'Budget is required' })}
                    className="sr-only"
                  />
                  <div className="card p-4 cursor-pointer border-2 border-blue-900 hover:border-blue-500 transition-colors bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <option.icon className="h-5 w-5" color={fordBlue} />
                      <span className="text-sm font-medium text-blue-100">{option.label}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Implementation Timeline
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'immediate', label: 'Immediate (0-3 months)', icon: Clock },
                { value: 'short-term', label: 'Short-term (3-12 months)', icon: Clock },
                { value: 'long-term', label: 'Long-term (12+ months)', icon: Clock }
              ].map((option) => (
                <label key={option.value} className="relative">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('timeline', { required: 'Timeline is required' })}
                    className="sr-only"
                  />
                  <div className="card p-4 cursor-pointer border-2 border-blue-900 hover:border-blue-500 transition-colors bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <option.icon className="h-5 w-5" color={fordBlue} />
                      <span className="text-sm font-medium text-blue-100">{option.label}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Technical Expertise Level
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { value: 'beginner', label: 'Beginner', icon: GraduationCap },
                { value: 'intermediate', label: 'Intermediate', icon: GraduationCap },
                { value: 'advanced', label: 'Advanced', icon: GraduationCap }
              ].map((option) => (
                <label key={option.value} className="relative">
                  <input
                    type="radio"
                    value={option.value}
                    {...register('expertise', { required: 'Expertise level is required' })}
                    className="sr-only"
                  />
                  <div className="card p-4 cursor-pointer border-2 border-blue-900 hover:border-blue-500 transition-colors bg-gray-900">
                    <div className="flex items-center space-x-3">
                      <option.icon className="h-5 w-5" color={fordBlue} />
                      <span className="text-sm font-medium text-blue-100">{option.label}</span>
                    </div>
                  </div>
                </label>
              ))}
            </div>
            {errors.expertise && (
              <p className="text-red-500 text-sm mt-1">{errors.expertise.message}</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            1
          </div>
          <div className="w-16 h-1 bg-gray-200 rounded">
            <div className={`h-full bg-primary-600 rounded transition-all duration-300 ${
              currentStep >= 2 ? 'w-full' : 'w-0'
            }`} />
          </div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
            currentStep >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'
          }`}>
            2
          </div>
        </div>
      </div>

      {currentStep === 1 && renderStep1()}
      {currentStep === 2 && renderStep2()}

      <div className="flex justify-between mt-8">
        {currentStep === 1 ? (
          <div />
        ) : (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            className="btn-secondary"
          >
            Back
          </button>
        )}
        
        {currentStep === 1 ? (
          <button
            onClick={() => setCurrentStep(2)}
            className="btn-primary flex items-center space-x-2"
          >
            <span>Next</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            onClick={handleSubmit(onSubmit)}
            className="btn-primary flex items-center space-x-2"
          >
            <span>Get Recommendations</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Optional: Company Tools Section */}
      <div className="card p-8 mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Optional: Tools/Platforms Used in Your Company</h3>
        <p className="text-gray-600 mb-4">You can list the tools or platforms you use for each layer below (optional):</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { label: 'Data Acquisition', name: 'tools_data_acquisition' },
            { label: 'Edge Processing', name: 'tools_edge_processing' },
            { label: 'Data Integration', name: 'tools_data_integration' },
            { label: 'Visualization/Analytics', name: 'tools_visualization' },
            { label: 'Security', name: 'tools_security' },
            { label: 'Compliance', name: 'tools_compliance' },
            { label: 'Others', name: 'tools_others' },
          ].map((layer) => (
            <div key={layer.name}>
              <label className="block text-sm font-medium text-gray-700 mb-2">{layer.label}</label>
              <input
                type="text"
                {...register(layer.name as any)}
                className="input-field"
                placeholder={`e.g. Ignition, Kepware, Grafana, ...`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile; 