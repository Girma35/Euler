import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CTA from '../components/CTA'
import PackageCard from '../components/PackageCard'
import CaseStudyCard from '../components/CaseStudyCard'
import FAQ from '../components/FAQ'
import { packages } from '@/lib/data/packages'
import { caseStudies } from '@/lib/data/case-studies'

const featuredPackages = packages.slice(0, 3)
const featuredCaseStudies = caseStudies.slice(0, 3)

export const metadata: Metadata = {
  title: 'Euler – Remote Coding, Writing & Growth Services Delivered in 48 hrs',
  description: 'Hire Euler for bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 48 hrs delivery or it\'s free.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com',
    title: 'Euler – Remote Coding, Writing & Growth Services Delivered in 24 h',
    description: 'Hire Euler for bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 24-h delivery or it\'s free.',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Euler - Remote Digital Services' }]
  }
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Remote Digital Services Delivered in{' '}
              <span className="text-accent">48 hrs</span>
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 
              guaranteed delivery, or it's free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/euler/15min"
                className="btn-secondary text-lg px-8 py-4"
                data-goal="lead"
              >
                Book Free 15-min Call
              </a>
              <Link
                href="/packages"
                className="bg-white text-primary px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 text-lg"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">46</div>
              <div className="text-gray-600">Digital Services</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24h</div>
              <div className="text-gray-600">Average Delivery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Core Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From bug fixes to growth marketing, we deliver results across all digital domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Development</h3>
              <p className="text-gray-600 mb-6">
                Bug fixes, MERN apps, Telegram bots, landing pages—delivered in 24 hours with full testing.
              </p>
              <Link href="/services/development" className="text-primary hover:text-cyan-800 font-medium">
                View Development Services →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Writing</h3>
              <p className="text-gray-600 mb-6">
                SEO blogs, technical docs, marketing copy—Grammarly 95+ quality, keyword-optimized content.
              </p>
              <Link href="/services/writing" className="text-primary hover:text-cyan-800 font-medium">
                View Writing Services →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <p className="text-gray-600 mb-6">
                Social media sprints, content calendars, growth strategies—consistent 30-day content engines.
              </p>
              <Link href="/services/growth" className="text-primary hover:text-cyan-800 font-medium">
                View Growth Services →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Fixed-Price Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready-to-deploy solutions with guaranteed delivery times and transparent pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/packages" className="btn-primary">
              View All Packages
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real clients, real results—see how we've helped businesses grow with our 24-hour delivery promise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/case-studies" className="btn-primary">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Get Started?"
        description="Book a free 15-minute call to discuss your project and get a custom quote."
      />

      {/* FAQ Section */}
      <FAQ />
    </>
  )
}
