'use client'

import { useState } from 'react'

export default function CorePillars() {
  const [hoveredCard, setHoveredCard] = useState<'governance' | 'enforcement' | null>(null)

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Two Pillars, One Platform
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-400 max-w-3xl mx-auto">
            From regulatory change to operational compliance—automated end-to-end
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Connecting Line & Arrow - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              <div className={`w-24 h-0.5 bg-gradient-to-r transition-all duration-500 ${
                hoveredCard === 'governance' 
                  ? 'from-[#3a64a8] to-[#5c6972]' 
                  : hoveredCard === 'enforcement'
                  ? 'from-[#5c6972] to-[#3a64a8]'
                  : 'from-gray-300 to-gray-300 dark:from-gray-700 dark:to-gray-700'
              }`}></div>
              <div className={`absolute top-1/2 right-0 -translate-y-1/2 transition-all duration-500 ${
                hoveredCard ? 'opacity-100 translate-x-1' : 'opacity-50'
              }`}>
                <svg className={`w-6 h-6 transition-colors duration-500 ${
                  hoveredCard === 'enforcement' ? 'text-[#5c6972]' : 'text-gray-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className={`absolute top-1/2 left-0 -translate-y-1/2 transition-all duration-500 ${
                hoveredCard ? 'opacity-100 -translate-x-1' : 'opacity-50'
              }`}>
                <svg className={`w-6 h-6 transition-colors duration-500 ${
                  hoveredCard === 'governance' ? 'text-[#3a64a8]' : 'text-gray-400'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          {/* LEFT CARD - Governance Pillar */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('governance')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`relative h-full bg-gradient-to-br from-white to-primary-50/30 dark:from-gray-800 dark:to-primary-900/10 rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 ${
              hoveredCard === 'governance' 
                ? 'border-[#3a64a8] shadow-2xl shadow-primary-500/20 -translate-y-2' 
                : 'border-gray-200 dark:border-gray-700'
            }`}>
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                hoveredCard === 'governance' 
                  ? 'bg-[#3a64a8] shadow-lg shadow-primary-500/50' 
                  : 'bg-primary-100 dark:bg-primary-900/30'
              }`}>
                <svg className={`w-8 h-8 transition-colors duration-500 ${
                  hoveredCard === 'governance' ? 'text-white' : 'text-[#3a64a8]'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Law → Policy → Practice
                </h3>
                <p className="text-lg font-semibold text-[#3a64a8] dark:text-primary-400 mb-2">
                  Policy Adaptation & Governance
                </p>
                <div className={`h-1 w-20 bg-gradient-to-r from-[#3a64a8] to-transparent rounded-full transition-all duration-500 ${
                  hoveredCard === 'governance' ? 'w-32' : 'w-20'
                }`}></div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  'Regulation ingestion & translation',
                  'AI-powered policy authoring',
                  'Automated law-to-policy mapping',
                  'Gap analysis & impact reports',
                  'Horizon scanning & alerts'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                      hoveredCard === 'governance' 
                        ? 'bg-[#3a64a8] scale-110' 
                        : 'bg-primary-100 dark:bg-primary-900/30'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${
                        hoveredCard === 'governance' ? 'text-white' : 'text-[#3a64a8]'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Target Audience */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  IDEAL FOR:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Legal Teams', 'DPOs', 'Compliance Officers'].map((role, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      hoveredCard === 'governance'
                        ? 'bg-[#3a64a8] text-white'
                        : 'bg-primary-100 dark:bg-primary-900/30 text-[#3a64a8] dark:text-primary-400'
                    }`}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-[#3a64a8] opacity-0 rounded-bl-full transition-all duration-500 blur-3xl ${
                hoveredCard === 'governance' ? 'opacity-10' : 'opacity-0'
              }`}></div>
            </div>
          </div>

          {/* RIGHT CARD - Enforcement Pillar */}
          <div 
            className="group relative"
            onMouseEnter={() => setHoveredCard('enforcement')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`relative h-full bg-gradient-to-br from-white to-secondary-50/30 dark:from-gray-800 dark:to-secondary-900/10 rounded-2xl p-8 shadow-xl border-2 transition-all duration-500 ${
              hoveredCard === 'enforcement' 
                ? 'border-[#5c6972] shadow-2xl shadow-secondary-500/20 -translate-y-2' 
                : 'border-gray-200 dark:border-gray-700'
            }`}>
              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${
                hoveredCard === 'enforcement' 
                  ? 'bg-[#5c6972] shadow-lg shadow-secondary-500/50' 
                  : 'bg-secondary-100 dark:bg-secondary-900/30'
              }`}>
                <svg className={`w-8 h-8 transition-colors duration-500 ${
                  hoveredCard === 'enforcement' ? 'text-white' : 'text-[#5c6972]'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11 4a1 1 0 10-2 0v4a1 1 0 102 0V7zm-3 1a1 1 0 10-2 0v3a1 1 0 102 0V8zM8 9a1 1 0 00-2 0v2a1 1 0 102 0V9z" clipRule="evenodd" />
                </svg>
              </div>

              {/* Title & Subtitle */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Policy → Practice
                </h3>
                <p className="text-lg font-semibold text-[#5c6972] dark:text-secondary-400 mb-2">
                  Operational Monitoring & Enforcement
                </p>
                <div className={`h-1 w-20 bg-gradient-to-r from-[#5c6972] to-transparent rounded-full transition-all duration-500 ${
                  hoveredCard === 'enforcement' ? 'w-32' : 'w-20'
                }`}></div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {[
                  'Continuous compliance monitoring',
                  'Automated violation detection',
                  'Smart remediation orchestration',
                  'Audit-ready evidence packaging',
                  'Exception workflows'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 group/item">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 transition-all duration-300 ${
                      hoveredCard === 'enforcement' 
                        ? 'bg-[#5c6972] scale-110' 
                        : 'bg-secondary-100 dark:bg-secondary-900/30'
                    }`}>
                      <svg className={`w-4 h-4 transition-colors duration-300 ${
                        hoveredCard === 'enforcement' ? 'text-white' : 'text-[#5c6972]'
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Target Audience */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-2">
                  IDEAL FOR:
                </p>
                <div className="flex flex-wrap gap-2">
                  {['Security/IT', 'Internal Auditors'].map((role, index) => (
                    <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
                      hoveredCard === 'enforcement'
                        ? 'bg-[#5c6972] text-white'
                        : 'bg-secondary-100 dark:bg-secondary-900/30 text-[#5c6972] dark:text-secondary-400'
                    }`}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Corner Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-[#5c6972] opacity-0 rounded-bl-full transition-all duration-500 blur-3xl ${
                hoveredCard === 'enforcement' ? 'opacity-10' : 'opacity-0'
              }`}></div>
            </div>
          </div>
        </div>

        {/* Mobile Connection Indicator */}
        <div className="lg:hidden flex justify-center my-8">
          <div className="flex flex-col items-center gap-2">
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#3a64a8] to-[#5c6972]"></div>
            <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z" clipRule="evenodd" />
            </svg>
            <div className="w-0.5 h-8 bg-gradient-to-b from-[#5c6972] to-[#3a64a8]"></div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Both pillars work seamlessly together for complete compliance automation
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#3a64a8] to-[#5c6972] hover:from-[#2d5190] hover:to-[#4a5761] text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Full Platform
          </button>
        </div>
      </div>
    </section>
  )
}

