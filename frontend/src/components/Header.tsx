import React from 'react';
import { motion } from 'framer-motion';
import { Car, Gauge, Building2, Network, Database, Shield, Zap } from 'lucide-react';

const fordBlue = '#00a1e0';

const Header: React.FC = () => {
  return (
    <header className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 shadow-2xl border-b-4 border-blue-600/60 backdrop-blur-md">
      {/* Speedometer SVG background accent */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
        <Gauge className="w-64 h-64" color={fordBlue} />
      </div>
      <div className="container mx-auto px-4 py-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <div className="p-3 bg-gradient-to-br from-blue-900 via-gray-900 to-blue-800 rounded-full shadow-lg border-2 border-blue-600">
                <Car className="h-8 w-8" color={fordBlue} />
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-blue-400 tracking-wide drop-shadow-lg" style={{ fontFamily: 'Exo, Montserrat, Poppins, Arial, sans-serif' }}>UNS Consultancy</h1>
                <p className="text-sm text-gray-300 font-semibold tracking-wider">Automotive IoT Solutions</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-blue-300">
              <div className="flex items-center space-x-1">
                <Building2 className="h-4 w-4" color={fordBlue} />
                <span>Litmus</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" color={fordBlue} />
                <span>Belden</span>
              </div>
              <div className="flex items-center space-x-1">
                <Database className="h-4 w-4" color={fordBlue} />
                <span>Highbyte</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-700 to-blue-900 px-3 py-1 rounded-full shadow">
              <Zap className="h-4 w-4" color={fordBlue} />
              <span className="text-sm font-bold text-blue-200 tracking-wide">Expert Automotive Guidance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header; 