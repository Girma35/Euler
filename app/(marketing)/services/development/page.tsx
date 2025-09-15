import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '../../../components/CTA'
import CaseStudyCard from '../../../components/CaseStudyCard'
import PackageCard from '../../../components/PackageCard'
import { caseStudies } from '@/lib/data/case-studies'
import { packages } from '@/lib/data/packages'
import { getServiceSchema } from '@/lib/utils/getServiceSchema'

const devCaseStudies = caseStudies.filter(cs => cs.category === 'dev')
const devPackages = packages.filter(pkg => pkg.category === 'dev')

export const metadata: Metadata = {
  title: 'Development Services - Bug Fixes, MERN Apps, Telegram Bots',
  description: 'Professional development services: bug fixes, MERN stack apps, Telegram bots, landing pages. 24-hour delivery, fixed prices, full testing included.',
  alternates: { canonical: '/services/development' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/services/development',
    title: 'Development Services - Bug Fixes, MERN Apps, Telegram Bots',
    description: 'Professional development services: bug fixes, MERN stack apps, Telegram bots, landing pages. 24-hour delivery, fixed prices, full testing included.'
  }
}

export default function DevelopmentPage() {
  const schema = getServiceSchema({
    name: 'Development Services',
    description: 'Bug fixes, MERN apps, Telegram bots, landing pages—delivered in 24 hours with full testing.',
    price: 149,
    category: 'Software Development',
    url: 'https://euler.com/services/development'
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Development Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Bug fixes, MERN apps, Telegram bots, landing pages—delivered in 48 hrs with full testing and deployment.
            </p>
            <a
              href="https://calendly.com/euler/15min"
              className="btn-secondary text-lg px-8 py-4"
              data-goal="lead"
            >
              Get Development Quote
            </a>
          </div>
        </div>
      </section>

      

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick bug fixes to full-stack applications, we deliver production-ready code in 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Bug Fixes</h3>
              <p className="text-gray-600 mb-4">
                Same-day bug fixes with comprehensive testing and deployment. 14-day warranty included.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• React, Vue, Angular fixes</li>
                <li>• Backend API debugging</li>
                <li>• Database optimization</li>
                <li>• Performance improvements</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">MERN Stack Apps</h3>
              <p className="text-gray-600 mb-4">
                Full-stack applications with MongoDB, Express, React, and Node.js. SEO-ready and optimized.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Complete web applications</li>
                <li>• User authentication</li>
                <li>• Payment integration</li>
                <li>• Admin dashboards</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Telegram Bots</h3>
              <p className="text-gray-600 mb-4">
                Custom Telegram bots with advanced features like captcha, referrals, and admin panels.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Interactive commands</li>
                <li>• User management</li>
                <li>• Payment processing</li>
                <li>• Analytics dashboard</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Landing Pages</h3>
              <p className="text-gray-600 mb-4">
                High-converting landing pages with 90+ PageSpeed scores and SEO optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Mobile-responsive design</li>
                <li>• A/B testing ready</li>
                <li>• Analytics integration</li>
                <li>• Vercel deployment</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">API Development</h3>
              <p className="text-gray-600 mb-4">
                RESTful APIs and GraphQL endpoints with comprehensive documentation and testing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• RESTful API design</li>
                <li>• GraphQL implementation</li>
                <li>• Rate limiting & security</li>
                <li>• API documentation</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Database Design</h3>
              <p className="text-gray-600 mb-4">
                Optimized database schemas with proper indexing and relationship management.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• MongoDB optimization</li>
                <li>• PostgreSQL design</li>
                <li>• Data migration</li>
                <li>• Performance tuning</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 24-Hour Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to deployment, we follow a proven process that ensures quality and speed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Consultation</h3>
              <p className="text-gray-600">15-minute call to understand requirements and provide accurate quote.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Coding begins immediately with regular progress updates every 4 hours.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600">Comprehensive testing including unit tests, integration tests, and QA.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-gray-600">Deployment with documentation, source code, and 14-day warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've helped businesses solve critical development challenges in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {devCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Development Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed-price packages for common development needs with guaranteed delivery times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {devPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need Development Help?"
        description="Get a custom quote for your development project. Most projects start within 6 hours of payment."
      />
    </>
  )
}
