export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 dark:from-primary-800 dark:via-primary-900 dark:to-secondary-800"></div>
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Start with a 30-Day Compliance Health Scan
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto leading-relaxed mb-8">
            Get instant visibility into your compliance posture with our comprehensive health assessment
          </p>
        </div>

        {/* What's Included Box */}
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8 mb-10">
          <h3 className="text-xl font-bold text-white mb-6 text-center">What's Included in Your Health Scan</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Comprehensive Policy Review</h4>
                <p className="text-sm text-primary-100">AI analysis of your existing policies against current regulations</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">1 Free Connector Integration</h4>
                <p className="text-sm text-primary-100">Connect your email, S3, IAM, or log system for instant monitoring</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Governance Report</h4>
                <p className="text-sm text-primary-100">Detailed gap analysis and compliance posture assessment</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Prioritized Findings</h4>
                <p className="text-sm text-primary-100">Risk-ranked recommendations with remediation guidance</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Note */}
        <div className="text-center mb-10">
          <p className="text-primary-100 mb-2">
            <span className="font-semibold">Flexible Pricing:</span> Choose Governance Pillar, Enforcement Pillar, or both
          </p>
          <p className="text-sm text-primary-200">
            Scale from single-pillar deployment to full platform as your needs grow
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="group relative px-10 py-5 bg-white hover:bg-gray-50 text-primary-600 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started Free
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-10 py-5 bg-transparent hover:bg-white/10 text-white rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/40 hover:border-white transform hover:-translate-y-1">
            View Full Pricing
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm text-primary-100 mb-10">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Full access for 30 days</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Cancel anytime</span>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/20 pt-10">
          <p className="text-sm font-semibold text-primary-100 text-center mb-6 uppercase tracking-wider">
            Enterprise-Grade Security & Compliance
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {/* SOC 2 Badge */}
            <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
              <span className="text-sm font-bold text-white">SOC 2 Type II</span>
            </div>

            {/* GDPR Badge */}
            <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h-2V7zm0 4h2v6h-2v-6z"/>
              </svg>
              <span className="text-sm font-bold text-white">GDPR Ready</span>
            </div>

            {/* ISO Badge */}
            <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10a2 2 0 100-4 2 2 0 000 4zm0 6a6 6 0 01-6-6h2a4 4 0 008 0h2a6 6 0 01-6 6z"/>
              </svg>
              <span className="text-sm font-bold text-white">ISO 27001</span>
            </div>

            {/* Encrypted Badge */}
            <div className="flex flex-col items-center gap-2 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.3c-.6 0-1.3-.6-1.3-1.3v-3.5c0-.6.6-1.2 1.3-1.2V9.5C9.2 8.1 10.6 7 12 7zm0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3z"/>
              </svg>
              <span className="text-sm font-bold text-white">256-bit Encryption</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
