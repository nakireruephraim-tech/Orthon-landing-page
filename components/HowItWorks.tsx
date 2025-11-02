'use client'

import { useEffect, useRef, useState } from 'react'

export default function HowItWorks() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  const steps = [
    {
      number: '01',
      title: 'Ingest Regulations',
      subtitle: 'Regulatory Intelligence',
      description: 'Connect to regulatory sources, GDPR, SOC2, ISO standards, and industry-specific frameworks. Continuous monitoring of regulatory changes.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      features: ['Multi-source ingestion', 'Real-time updates', 'Smart classification'],
      color: 'from-blue-500 to-primary-500',
    },
    {
      number: '02',
      title: 'Generate Policies',
      subtitle: 'AI-Powered Authoring',
      description: 'AI-assisted policy drafting with version control. Transform regulations into actionable policies with intelligent recommendations.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      features: ['AI drafting', 'Version control', 'Approval workflows'],
      color: 'from-primary-500 to-primary-600',
    },
    {
      number: '03',
      title: 'Monitor Operations',
      subtitle: 'Continuous Surveillance',
      description: 'Continuous scanning of logs, configurations, data flows, and access patterns. Real-time detection of compliance drift.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      features: ['Log analysis', 'Config scanning', 'Behavior monitoring'],
      color: 'from-primary-600 to-secondary-500',
    },
    {
      number: '04',
      title: 'Ensure Compliance',
      subtitle: 'Automated Enforcement',
      description: 'Automated detection, smart remediation, and comprehensive audit reports. Stay compliant with zero manual effort.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      features: ['Auto-remediation', 'Audit reports', 'Evidence packaging'],
      color: 'from-secondary-500 to-secondary-600',
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = parseInt(entry.target.getAttribute('data-step') || '0')
            setTimeout(() => {
              setVisibleSteps((prev) => [...new Set([...prev, stepIndex])])
            }, stepIndex * 200) // Stagger animations
          }
        })
      },
      { threshold: 0.2 }
    )

    const stepElements = document.querySelectorAll('[data-step]')
    stepElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #3a64a8 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-400 max-w-3xl mx-auto">
            A living compliance system that adapts, monitors, and enforces in real-time
          </p>
        </div>

        {/* Timeline Flow - Desktop */}
        <div className="hidden lg:block relative">
          {/* Flowing Line */}
          <div className="absolute top-32 left-0 right-0 h-1 flex">
            {steps.map((step, index) => (
              <div key={index} className="flex-1 flex items-center">
                <div className={`h-1 w-full bg-gradient-to-r ${step.color} transition-all duration-1000 ${
                  visibleSteps.includes(index) ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                } origin-left`}></div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-8 -ml-4 -mr-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center z-10 transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                  }`}>
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Steps */}
          <div className="grid grid-cols-4 gap-6 relative pt-8">
            {steps.map((step, index) => (
              <div
                key={index}
                data-step={index}
                className={`transition-all duration-700 ${
                  visibleSteps.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
              >
                {/* Step Card */}
                <div className="relative">
                  {/* Icon Circle */}
                  <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg shadow-primary-500/30 transform transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                  }`}>
                    {step.icon}
                  </div>

                  {/* Content Card */}
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="text-sm font-bold text-primary-500 dark:text-primary-400 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2">
                      {step.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pulsing Dot */}
                  <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 transition-all duration-500 ${
                    visibleSteps.includes(index) ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <span className="relative flex h-3 w-3">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${step.color} opacity-75`}></span>
                      <span className={`relative inline-flex rounded-full h-3 w-3 bg-gradient-to-r ${step.color}`}></span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              data-step={index}
              className={`transition-all duration-700 ${
                visibleSteps.includes(index) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
            >
              <div className="flex gap-4">
                {/* Icon + Connector */}
                <div className="flex flex-col items-center">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-lg`}>
                    {step.icon}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-1 flex-1 mt-4 bg-gradient-to-b ${step.color} rounded-full min-h-[60px]`}></div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-700">
                    <div className="text-sm font-bold text-primary-500 dark:text-primary-400 mb-2">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm font-semibold text-secondary-600 dark:text-secondary-400 mb-3">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {step.description}
                    </p>
                    
                    <div className="space-y-2">
                      {step.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-500">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Regulations Tracked', value: '500+' },
            { label: 'Policy Templates', value: '200+' },
            { label: 'Monitored Events/Day', value: '1M+' },
            { label: 'Compliance Score', value: '99.8%' },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 transition-all duration-700 delay-${index * 100} ${
                visibleSteps.length > 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

