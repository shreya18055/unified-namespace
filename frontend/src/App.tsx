import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header.tsx';
import CompanyProfile from './components/CompanyProfile.tsx';
import RequirementsAssessment from './components/RequirementsAssessment.tsx';
import Results from './components/Results.tsx';
import AnimatedBackground from './components/AnimatedBackground.tsx';
import { CompanyProfile as CompanyProfileType, AssessmentResult } from './types/index.ts';

type AppStep = 'profile' | 'assessment' | 'results';

function App() {
  const [currentStep, setCurrentStep] = useState<AppStep>('profile');
  const [companyProfile, setCompanyProfile] = useState<CompanyProfileType | null>(null);
  const [assessmentResult, setAssessmentResult] = useState<AssessmentResult | null>(null);

  const handleProfileComplete = (profile: CompanyProfileType) => {
    setCompanyProfile(profile);
    setCurrentStep('assessment');
  };

  const handleAssessmentComplete = (result: AssessmentResult) => {
    setAssessmentResult(result);
    setCurrentStep('results');
  };

  const handleRestart = () => {
    setCompanyProfile(null);
    setAssessmentResult(null);
    setCurrentStep('profile');
  };

  return (
    <>
      <AnimatedBackground />
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {currentStep === 'profile' && (
            <CompanyProfile onComplete={handleProfileComplete} />
          )}
          
          {currentStep === 'assessment' && companyProfile && (
            <RequirementsAssessment 
              companyProfile={companyProfile}
              onComplete={handleAssessmentComplete}
              onBack={() => setCurrentStep('profile')}
            />
          )}
          
          {currentStep === 'results' && assessmentResult && companyProfile && (
            <Results 
              result={assessmentResult}
              companyProfile={companyProfile}
              onRestart={handleRestart}
            />
          )}
        </motion.div>
      </main>
    </>
  );
}

export default App; 