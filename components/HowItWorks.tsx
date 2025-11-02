export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Connect Your Systems',
      description: 'Integrate Orthon.AI with your existing tools and data sources through our secure API or pre-built connectors.',
    },
    {
      number: '02',
      title: 'Configure Rules & Policies',
      description: 'Set up compliance rules, audit frameworks, and custom policies tailored to your industry and requirements.',
    },
    {
      number: '03',
      title: 'AI Takes Over',
      description: 'Our AI engine automatically monitors, analyzes, and flags potential issues while learning from your patterns.',
    },
    {
      number: '04',
      title: 'Review & Report',
      description: 'Access real-time dashboards, automated reports, and actionable insights to stay audit-ready 24/7.',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get started with Orthon.AI in four simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                <div className="text-6xl font-bold text-primary-100 dark:text-primary-900/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-secondary-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg className="w-6 h-6 text-primary-300 dark:text-primary-700" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

