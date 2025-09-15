import type { Metadata } from 'next'
import Image from 'next/image'
import CTA from '../../components/CTA'

export const metadata: Metadata = {
  title: 'About Euler - Remote Digital Services Team',
  description: 'Learn about Euler\'s mission to deliver high-quality digital services in 24 hours. Meet our team of developers, writers, and growth specialists.',
  alternates: { canonical: '/about' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/about',
    title: 'About Euler - Remote Digital Services Team',
    description: 'Learn about Euler\'s mission to deliver high-quality digital services in 24 hours. Meet our team of developers, writers, and growth specialists.'
  }
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Euler
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              We're a team of remote specialists delivering high-quality digital services in 24 hours or less.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-600">
                To democratize access to high-quality digital services by delivering professional results in 24 hours at transparent, fixed prices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Speed</h3>
                <p className="text-gray-600">24-hour delivery or it's free. We understand that time is money in business.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Quality</h3>
                <p className="text-gray-600">Professional-grade work with comprehensive testing and quality assurance.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Transparency</h3>
                <p className="text-gray-600">Fixed prices, no hidden fees, clear communication throughout the process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
            </div>

            <div className="prose prose-lg mx-auto text-gray-700">
              <p className="text-xl mb-6">
                Euler was born from a simple observation: businesses were struggling to find reliable, fast, and affordable digital services. 
                Traditional agencies took weeks to deliver, while freelancers were inconsistent in quality and communication.
              </p>
              
              <p className="mb-6">
                We saw an opportunity to bridge this gap by creating a service that combines the speed of freelancers with the quality 
                and reliability of agencies. Our 24-hour delivery promise isn't just a marketing gimmick—it's our core differentiator.
              </p>
              
              <p className="mb-6">
                Today, we're proud to serve businesses worldwide with our team of specialized developers, writers, and growth experts. 
                Every project is an opportunity to prove that quality and speed don't have to be mutually exclusive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a distributed team of specialists working across different time zones to ensure 24-hour coverage for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">D</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development Team</h3>
              <p className="text-gray-600 mb-4">Full-stack developers specializing in React, Node.js, Python, and modern web technologies.</p>
              <div className="text-sm text-gray-500">
                <p>• 5+ years average experience</p>
                <p>• Certified in latest frameworks</p>
                <p>• 24/7 availability</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">W</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Writing Team</h3>
              <p className="text-gray-600 mb-4">Professional writers with expertise in SEO, technical documentation, and marketing copy.</p>
              <div className="text-sm text-gray-500">
                <p>• Native English speakers</p>
                <p>• SEO certification</p>
                <p>• Industry expertise</p>
              </div>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">G</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Team</h3>
              <p className="text-gray-600 mb-4">Social media specialists and growth marketers with proven track records across platforms.</p>
              <div className="text-sm text-gray-500">
                <p>• Platform certifications</p>
                <p>• Analytics expertise</p>
                <p>• Creative strategists</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do, from client communication to service delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Client-First Approach</h3>
              <p className="text-gray-600">
                Every decision we make is guided by what's best for our clients. We prioritize their success over our convenience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Continuous Improvement</h3>
              <p className="text-gray-600">
                We're always learning, adapting, and improving our processes to deliver better results faster.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Transparency</h3>
              <p className="text-gray-600">
                Clear communication, honest pricing, and regular updates keep our clients informed throughout every project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Reliability</h3>
              <p className="text-gray-600">
                When we promise 24-hour delivery, we mean it. Our track record speaks for itself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              By the Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our performance metrics tell the story of our commitment to excellence and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Work With Us?"
        description="Join the growing list of businesses that trust Euler for their digital service needs."
      />
    </>
  )
}
