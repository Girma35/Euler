import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '../../../components/CTA'
import CaseStudyCard from '../../../components/CaseStudyCard'
import PackageCard from '../../../components/PackageCard'
import { caseStudies } from '@/lib/data/case-studies'
import { packages } from '@/lib/data/packages'
import { getServiceSchema } from '@/lib/utils/getServiceSchema'

const growthCaseStudies = caseStudies.filter(cs => cs.category === 'growth')
const growthPackages = packages.filter(pkg => pkg.category === 'growth')

export const metadata: Metadata = {
  title: 'Growth Services - Social Media, Content Strategy, Digital Marketing',
  description: 'Professional growth services: social media sprints, content calendars, growth strategies. Consistent 30-day content engines with proven results.',
  alternates: { canonical: '/services/growth' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/services/growth',
    title: 'Growth Services - Social Media, Content Strategy, Digital Marketing',
    description: 'Professional growth services: social media sprints, content calendars, growth strategies. Consistent 30-day content engines with proven results.'
  }
}

export default function GrowthPage() {
  const schema = getServiceSchema({
    name: 'Growth Services',
    description: 'Social media sprints, content calendars, growth strategies—consistent 30-day content engines.',
    price: 749,
    category: 'Digital Marketing',
    url: 'https://euler.com/services/growth'
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
              Professional Growth Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              Social media sprints, content calendars, growth strategies—consistent 30-day content engines delivered on 48 hrs cycles.
            </p>
            <a
              href="https://calendly.com/euler/15min"
              className="btn-secondary text-lg px-8 py-4"
              data-goal="lead"
            >
              Get Growth Strategy
            </a>
          </div>
        </div>
      </section>

      

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Growth Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social media management to content strategy, we help businesses grow their online presence and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Social Media Sprints</h3>
              <p className="text-gray-600 mb-4">
                30-day intensive social media campaigns with 60 posts and 30 reels across platforms.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Instagram & TikTok content</li>
                <li>• Hashtag research & optimization</li>
                <li>• Engagement strategies</li>
                <li>• Growth tracking & reports</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Content Calendars</h3>
              <p className="text-gray-600 mb-4">
                Strategic content planning with themes, posting schedules, and engagement optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Monthly content themes</li>
                <li>• Optimal posting times</li>
                <li>• Content mix planning</li>
                <li>• Performance tracking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Growth Strategies</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive growth plans tailored to your industry and target audience.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Audience analysis</li>
                <li>• Competitor research</li>
                <li>• Growth roadmap</li>
                <li>• KPI tracking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Influencer Outreach</h3>
              <p className="text-gray-600 mb-4">
                Strategic influencer partnerships and collaboration campaigns for brand awareness.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Influencer identification</li>
                <li>• Outreach campaigns</li>
                <li>• Collaboration management</li>
                <li>• ROI tracking</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Community Building</h3>
              <p className="text-gray-600 mb-4">
                Building engaged communities around your brand with consistent interaction and value.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Community strategy</li>
                <li>• Engagement tactics</li>
                <li>• User-generated content</li>
                <li>• Community management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics and reporting to track growth and optimize strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Performance dashboards</li>
                <li>• Growth metrics tracking</li>
                <li>• Monthly reports</li>
                <li>• Strategy recommendations</li>
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
              Our Growth Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From strategy development to execution, we follow a proven process that delivers measurable growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Audit & Analysis</h3>
              <p className="text-gray-600">Comprehensive audit of current presence, competitors, and growth opportunities.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Strategy Development</h3>
              <p className="text-gray-600">Custom growth strategy with clear goals, tactics, and success metrics.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Content Creation</h3>
              <p className="text-gray-600">High-quality content creation and scheduling across all platforms.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">Continuous optimization based on performance data and audience feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Growth Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our growth strategies have delivered measurable results across various industries and platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">22K</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Average Follower Growth</h3>
              <p className="text-gray-600">Average follower increase across social media platforms in 30 days.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">300%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Engagement Increase</h3>
              <p className="text-gray-600">Average engagement rate improvement across all managed accounts.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">90%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Client Retention</h3>
              <p className="text-gray-600">Percentage of clients who continue with our growth services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Growth Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our growth strategies have helped businesses achieve remarkable social media growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Growth Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed-price packages for common growth needs with guaranteed results and delivery times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Ready to Grow Your Business?"
        description="Get a custom growth strategy tailored to your industry and target audience."
      />
    </>
  )
}
