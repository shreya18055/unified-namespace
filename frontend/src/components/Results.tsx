import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  ExternalLink, 
  CheckCircle, 
  AlertCircle, 
  Star, 
  ArrowRight,
  RefreshCw,
  Download,
  Share2
} from 'lucide-react';
import { AssessmentResult, CompanyProfile } from '../types/index.ts';

interface ResultsProps {
  result: AssessmentResult;
  companyProfile: CompanyProfile;
  onRestart: () => void;
}

const Results: React.FC<ResultsProps> = ({ result, companyProfile, onRestart }) => {
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const getVendorColor = (vendor: string) => {
    // All vendor badges use dark background and Ford blue border/text
    switch (vendor) {
      case 'Litmus': return 'bg-gray-950 text-blue-300 border-blue-700';
      case 'Belden': return 'bg-gray-950 text-blue-400 border-blue-600';
      case 'Highbyte': return 'bg-gray-950 text-blue-500 border-blue-500';
      default: return 'bg-gray-950 text-blue-200 border-blue-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Award className="h-12 w-12 text-primary-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Your Recommendations</h1>
          <p className="text-xl text-gray-600 mb-8">
            Based on your {companyProfile.industry} industry profile and requirements
          </p>
        </motion.div>
      </div>

      {/* Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Summary</h2>
        <p className="text-gray-700 leading-relaxed">{result.summary}</p>
      </motion.div>

      {/* Top Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Top Recommendations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {result.recommendations.slice(0, 4).map((rec, index) => (
            <motion.div
              key={rec.product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="card p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getVendorColor(rec.product.vendor)}`}>
                      {rec.product.vendor}
                    </span>
                    {index === 0 && (
                      <span className="flex items-center space-x-1 text-yellow-600">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">Top Pick</span>
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {rec.product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{rec.product.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">Score:</span>
                      <span className={`text-lg font-bold ${getScoreColor(rec.score)}`}>
                        {rec.score}/100
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">Category:</span>
                      <span className="text-sm text-gray-600">{rec.product.category}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Best For:</h4>
                  <div className="flex flex-wrap gap-2">
                    {rec.bestFor.slice(0, 3).map((useCase) => (
                      <span
                        key={useCase}
                        className="px-2 py-1 text-xs font-medium bg-gray-950 border border-blue-800 text-blue-400 rounded"
                      >
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button
                    onClick={() => setSelectedProduct(rec.product.id)}
                    className="flex-1 btn-primary text-sm py-2"
                  >
                    View Details
                  </button>
                  <a
                    href={rec.product.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span className="text-sm">Visit Site</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-gray-950/95 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gray-900 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-blue-700 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const product = result.recommendations.find(r => r.product.id === selectedProduct)?.product;
              if (!product) return null;

              return (
                <div>
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="px-3 py-1 text-sm font-medium rounded-full border border-blue-700 bg-blue-900/40 text-blue-300">
                        {product.vendor}
                      </span>
                      <h2 className="text-2xl font-bold text-blue-300 mt-2">{product.name}</h2>
                      <p className="text-gray-200 mt-2">{product.description}</p>
                    </div>
                    <button
                      onClick={() => setSelectedProduct(null)}
                      className="text-blue-400 hover:text-blue-200 text-2xl font-bold"
                      aria-label="Close"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-200 mb-3">Features</h3>
                      <ul className="space-y-2">
                        {product.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4" color="#00a1e0" />
                            <span className="text-gray-100">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-blue-200 mb-3">Use Cases</h3>
                      <ul className="space-y-2">
                        {product.useCases.map((useCase) => (
                          <li key={useCase} className="flex items-center space-x-2">
                            <ArrowRight className="h-4 w-4" color="#00a1e0" />
                            <span className="text-gray-100">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-200 mb-3">Pros</h3>
                      <ul className="space-y-2">
                        {product.pros.map((pro) => (
                          <li key={pro} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4" color="#00a1e0" />
                            <span className="text-gray-100">{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-blue-200 mb-3">Cons</h3>
                      <ul className="space-y-2">
                        {product.cons.map((con) => (
                          <li key={con} className="flex items-center space-x-2">
                            <AlertCircle className="h-4 w-4" color="#00a1e0" />
                            <span className="text-gray-100">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-blue-800">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-blue-200">Pricing:</span>
                        <span className="text-sm text-gray-200 ml-2">{product.pricing}</span>
                      </div>
                      <a
                        href={product.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary bg-blue-800 hover:bg-blue-700 border border-blue-700"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()}
          </motion.div>
        </motion.div>
      )}

      {/* Next Steps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="card p-8 mb-8"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Next Steps</h2>
        <div className="space-y-4">
          {result.nextSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                {index + 1}
              </div>
              <p className="text-gray-700">{step}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4"
      >
        <button
          onClick={onRestart}
          className="btn-secondary flex items-center space-x-2"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Start Over</span>
        </button>
        
        <button className="btn-secondary flex items-center space-x-2">
          <Download className="h-4 w-4" />
          <span>Download Report</span>
        </button>
        
        <button className="btn-secondary flex items-center space-x-2">
          <Share2 className="h-4 w-4" />
          <span>Share Results</span>
        </button>
      </motion.div>
    </div>
  );
};

export default Results; 