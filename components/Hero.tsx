'use client'

import { useEffect, useState } from 'react'

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-primary-50/30 to-secondary-50/40 dark:from-gray-950 dark:via-primary-950/20 dark:to-secondary-950/30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(58,100,168,0.15),transparent_50%)] animate-pulse" 
             style={{ animationDuration: '8s' }}></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(92,105,114,0.1),transparent_50%)] animate-pulse" 
             style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Shield Icon - Top Left */}
        <div className="absolute top-20 left-10 animate-float opacity-20 dark:opacity-10" 
             style={{ animationDelay: '0s', animationDuration: '6s' }}>
          <svg className="w-16 h-16 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1.944A11.954 11.954 0 012.166 5C2.056 5.649 2 6.319 2 7c0 5.225 3.34 9.67 8 11.317C14.66 16.67 18 12.225 18 7c0-.682-.057-1.35-.166-2.001A11.954 11.954 0 0110 1.944zM11 14a1 1 0 11-2 0 1 1 0 012 0zm0-7a1 1 0 10-2 0v3a1 1 0 102 0V7z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Check Circle - Top Right */}
        <div className="absolute top-40 right-20 animate-float opacity-20 dark:opacity-10" 
             style={{ animationDelay: '2s', animationDuration: '8s' }}>
          <svg className="w-20 h-20 text-secondary-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Document Icon - Bottom Left */}
        <div className="absolute bottom-32 left-1/4 animate-float opacity-20 dark:opacity-10" 
             style={{ animationDelay: '1s', animationDuration: '7s' }}>
          <svg className="w-14 h-14 text-primary-300" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Clipboard Check - Bottom Right */}
        <div className="absolute bottom-20 right-1/4 animate-float opacity-20 dark:opacity-10" 
             style={{ animationDelay: '3s', animationDuration: '9s' }}>
          <svg className="w-12 h-12 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>

        {/* Squares Pattern - Center Right */}
        <div className="absolute top-1/2 right-10 animate-float opacity-10 dark:opacity-5" 
             style={{ animationDelay: '4s', animationDuration: '10s' }}>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-3 h-3 bg-primary-400 rounded-sm"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Tagline */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-primary-100/60 dark:bg-primary-900/30 backdrop-blur-sm rounded-full mb-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Continuous compliance without continuous headaches
            </span>
          </div>

          {/* Headline */}
          <h1 className={`text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="block text-gray-900 dark:text-white mb-2">
              Autonomous Compliance
            </span>
            <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
              & Audit Agent
            </span>
          </h1>

          {/* Subheadline */}
          <p className={`mt-6 text-xl sm:text-2xl lg:text-3xl text-secondary-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            An always-on agent that <span className="font-semibold text-primary-600 dark:text-primary-400">translates regulations into policy</span> and ensures your <span className="font-semibold text-primary-600 dark:text-primary-400">operational practice matches those policies</span>
          </p>

          {/* CTA Buttons */}
          <div className={`mt-12 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button className="group relative px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-primary-500/50 transform hover:-translate-y-1 overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-primary-600 dark:text-primary-400 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-primary-500 dark:border-primary-400 transform hover:-translate-y-1">
              <span className="flex items-center gap-2">
                Watch Demo
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className={`mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-secondary-500 dark:text-gray-400 transition-all duration-1000 delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">Enterprise-ready security</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

