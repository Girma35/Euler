import type { Metadata } from 'next'
import PackageCard from '../../components/PackageCard'
import CTA from '../../components/CTA'
import { packages } from '@/lib/data/packages'

export const metadata: Metadata = {
  title: 'Fixed-Price Packages - Development, Writing, Growth Services',
  description: 'Browse our fixed-price packages for development, writing, and growth services. Transparent pricing, guaranteed delivery in 24 hours.',
  alternates: { canonical: '/packages' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/packages',
    title: 'Fixed-Price Packages - Development, Writing, Growth Services',
    description: 'Browse our fixed-price packages for development, writing, and growth services. Transparent pricing, guaranteed delivery in 24 hours.'
  }
}

export default function PackagesPage() {
  const devPackages = packages.filter(pkg => pkg.category === 'dev')
  const writingPackages = packages.filter(pkg => pkg.category === 'writing')
  const growthPackages = packages.filter(pkg => pkg.category === 'growth')

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fixed-Price Packages
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Transparent pricing, guaranteed delivery in 48 hrs. No hidden fees, no surprises—just results.
            </p>
            <a
              href="https://calendly.com/euler/15min"
              className="btn-secondary text-lg px-8 py-4"
              data-goal="lead"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      

      {/* Development Packages */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bug fixes to full applications, our development packages deliver production-ready code in 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Writing Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Writing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality content with Grammarly 95+ scores, keyword optimization, and SEO-ready formatting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writingPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Growth Packages */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Growth Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive growth strategies with consistent content delivery and measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Packages?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our packages are designed for businesses that need reliable, high-quality results without the complexity of custom quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">24-Hour Delivery</h3>
              <p className="text-gray-600">Most packages delivered within 24 hours. If we miss the deadline, it's free.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Guaranteed</h3>
              <p className="text-gray-600">Every package includes quality checks, testing, and revisions if needed.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Transparent Pricing</h3>
              <p className="text-gray-600">No hidden fees, no surprises. What you see is what you pay.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Something Custom?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't see what you need? We offer custom packages tailored to your specific requirements.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">Custom Package Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="text-left">
                <h4 className="font-semibold mb-2">Tailored Solutions</h4>
                <p className="text-gray-600">Packages designed specifically for your business needs and goals.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Flexible Pricing</h4>
                <p className="text-gray-600">Competitive pricing based on scope, timeline, and complexity.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Dedicated Support</h4>
                <p className="text-gray-600">Direct communication with our team throughout the project.</p>
              </div>
              <div className="text-left">
                <h4 className="font-semibold mb-2">Quality Assurance</h4>
                <p className="text-gray-600">Comprehensive testing and quality checks before delivery.</p>
              </div>
            </div>
            <a
              href="https://calendly.com/euler/15min"
              className="btn-primary"
              data-goal="lead"
            >
              Discuss Custom Package
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Choose a package that fits your needs, or book a free consultation to discuss custom requirements."
      />
    </>
  )
}
