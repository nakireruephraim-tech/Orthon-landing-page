'use client'

import { useEffect, useRef, useState } from 'react'

export default function Benefits() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ overhead: 0, detection: 0, evidence: 0, scan: 0 })
  const sectionRef = useRef<HTMLDivElement>(null)

  const stats = [
    {
      id: 'overhead',
      target: 90,
      suffix: '%',
      label: 'Reduction in Compliance Overhead',
      description: 'Automate repetitive tasks and focus on strategic initiatives',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      id: 'detection',
      target: 10,
      suffix: 'min',
      label: 'Average Time-to-Detection',
      description: 'Identify compliance issues before they escalate',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'evidence',
      target: 100,
      suffix: '%',
      label: 'Audit-Ready Evidence',
      description: 'Complete documentation at your fingertips',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      id: 'scan',
      target: 30,
      suffix: '-day',
      label: 'Compliance Health Scan',
      description: 'Continuous monitoring and risk assessment',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ]

  const testimonials = [
    {
      quote: "Orthon.AI transformed our compliance workflow. What used to take weeks now happens automatically in hours.",
      author: "Sarah Chen",
      role: "Chief Compliance Officer",
      company: "TechCorp Global",
    },
    {
      quote: "The AI-powered policy generation saved us hundreds of hours. It's like having a compliance expert working 24/7.",
      author: "Michael Rodriguez",
      role: "Head of Risk Management",
      company: "Financial Services Inc",
    },
    {
      quote: "Finally, audit-ready evidence at our fingertips. Orthon.AI made our last audit the smoothest one ever.",
      author: "Emily Thompson",
      role: "Internal Audit Director",
      company: "Healthcare Systems",
    },
  ]

  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000 // 2 seconds
    const steps = 60
    const interval = duration / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setCounts({
        overhead: Math.floor(stats[0].target * progress),
        detection: Math.floor(stats[1].target * progress),
        evidence: Math.floor(stats[2].target * progress),
        scan: Math.floor(stats[3].target * progress),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounts({
          overhead: stats[0].target,
          detection: stats[1].target,
          evidence: stats[2].target,
          scan: stats[3].target,
        })
      }
    }, interval)

    return () => clearInterval(timer)
  }, [isVisible])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real Impact, Real Results
          </h2>
          <p className="text-xl text-secondary-600 dark:text-gray-400 max-w-3xl mx-auto">
            Join hundreds of organizations transforming their compliance operations with Orthon.AI
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center text-[#3a64a8] dark:text-primary-400 mb-6">
                {stat.icon}
              </div>

              {/* Number */}
              <div className="mb-4">
                <span className="text-5xl sm:text-6xl font-bold text-[#3a64a8] dark:text-primary-400">
                  {counts[stat.id as keyof typeof counts]}
                </span>
                <span className="text-2xl font-bold text-[#3a64a8] dark:text-primary-400 ml-1">
                  {stat.suffix}
                </span>
              </div>

              {/* Label */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {stat.label}
              </h3>

              {/* Description */}
              <p className="text-sm text-secondary-600 dark:text-gray-400">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 sm:p-12 shadow-xl border border-gray-200 dark:border-gray-700 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <svg className="w-12 h-12 text-primary-500 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            
            <div className="relative h-48 sm:h-40">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentTestimonial
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <p className="text-xl sm:text-2xl text-gray-900 dark:text-white mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-secondary-600 dark:text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-primary-500 w-8'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise Logos */}
        <div className="text-center">
          <p className="text-sm font-semibold text-secondary-600 dark:text-gray-400 mb-8 uppercase tracking-wider">
            Trusted by Leading Organizations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 dark:opacity-40">
            {[
              'TechCorp',
              'FinServe',
              'HealthSys',
              'DataFlow',
            ].map((company, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-lg hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-2xl font-bold text-gray-400 dark:text-gray-600">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

