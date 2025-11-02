export default function Benefits() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose Orthon.AI?
            </h2>
            <p className="text-xl text-secondary-600 dark:text-gray-400 mb-8 leading-relaxed">
              Transform your compliance operations from reactive to proactive with AI-powered automation
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Save 75% of Time
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-400">
                    Automate repetitive compliance tasks and focus on strategic initiatives
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Reduce Risk by 90%
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-400">
                    Early detection and prevention of compliance violations and audit findings
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Always Audit-Ready
                  </h3>
                  <p className="text-secondary-600 dark:text-gray-400">
                    Real-time compliance status and instant report generation at any time
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-secondary-600 dark:text-gray-400">Compliance Score</span>
                  <span className="text-2xl font-bold text-green-600">98%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full" style={{ width: '98%' }}></div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-secondary-600 dark:text-gray-400">Active Monitoring</span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm font-semibold text-green-600">Live</span>
                  </span>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">24/7</p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
                <span className="text-sm font-semibold text-secondary-600 dark:text-gray-400 block mb-2">Time Saved This Month</span>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">247 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

