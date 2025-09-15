import type { Metadata } from 'next'
import CaseStudyCard from '../../components/CaseStudyCard'
import CTA from '../../components/CTA'
import { caseStudies } from '@/lib/data/case-studies'

export const metadata: Metadata = {
  title: 'Case Studies - Real Results from Our Digital Services',
  description: 'See real results from our development, writing, and growth services. Client success stories with measurable outcomes and testimonials.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/case-studies',
    title: 'Case Studies - Real Results from Our Digital Services',
    description: 'See real results from our development, writing, and growth services. Client success stories with measurable outcomes and testimonials.'
  }
}

export default function CaseStudiesPage() {
  const devCaseStudies = caseStudies.filter(cs => cs.category === 'dev')
  const writingCaseStudies = caseStudies.filter(cs => cs.category === 'writing')
  const growthCaseStudies = caseStudies.filter(cs => cs.category === 'growth')

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Real clients, real results. See how our 24-hour delivery promise has helped businesses achieve their goals.
            </p>
          </div>
        </div>
      </section>

      {/* Development Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bug fixes to full applications, see how our development services have solved critical business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Writing Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Writing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our high-quality content has improved SEO rankings and engagement for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {writingCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Growth Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our growth strategies have helped businesses achieve remarkable social media growth and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers don't lie. Here's what we've achieved for our clients across all service categories.
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

      {/* Client Testimonials */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with Euler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Acme SaaS</h4>
                  <p className="text-gray-600 text-sm">Tech Startup</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "Euler patched our router bug in 45 minutes. The fix was clean, tested, and deployed the same day. Incredible service."
              </blockquote>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">LedgerCoin</h4>
                  <p className="text-gray-600 text-sm">Crypto Platform</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "The Telegram bot was delivered overnight with zero downtime. Our user base grew by 4,000 users in the first week."
              </blockquote>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">StyleApp</h4>
                  <p className="text-gray-600 text-sm">Fashion Brand</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "The 30-day social media sprint delivered consistent growth. We gained 22,000 followers and saw a 300% increase in engagement."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Be Our Next Success Story?"
        description="Join the growing list of businesses that have achieved their goals with our 24-hour delivery promise."
      />
    </>
  )
}
