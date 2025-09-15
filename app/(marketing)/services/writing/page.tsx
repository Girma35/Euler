import type { Metadata } from 'next'
import Link from 'next/link'
import CTA from '../../../components/CTA'
import CaseStudyCard from '../../../components/CaseStudyCard'
import PackageCard from '../../../components/PackageCard'
import { caseStudies } from '@/lib/data/case-studies'
import { packages } from '@/lib/data/packages'
import { getServiceSchema } from '@/lib/utils/getServiceSchema'

const writingCaseStudies = caseStudies.filter(cs => cs.category === 'writing')
const writingPackages = packages.filter(pkg => pkg.category === 'writing')

export const metadata: Metadata = {
  title: 'Writing Services - SEO Blogs, Technical Docs, Marketing Copy',
  description: 'Professional writing services: SEO blogs, technical documentation, marketing copy. Grammarly 95+ quality, keyword-optimized, 24-hour delivery.',
  alternates: { canonical: '/services/writing' },
  openGraph: {
    type: 'website',
    url: 'https://euler.com/services/writing',
    title: 'Writing Services - SEO Blogs, Technical Docs, Marketing Copy',
    description: 'Professional writing services: SEO blogs, technical documentation, marketing copy. Grammarly 95+ quality, keyword-optimized, 24-hour delivery.'
  }
}

export default function WritingPage() {
  const schema = getServiceSchema({
    name: 'Writing Services',
    description: 'SEO blogs, technical docs, marketing copy—Grammarly 95+ quality, keyword-optimized content.',
    price: 120,
    category: 'Content Writing',
    url: 'https://euler.com/services/writing'
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
              Professional Writing Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-100 mb-8">
              SEO blogs, technical docs, marketing copy—Grammarly 95+ quality, keyword-optimized content delivered in 48 hrs.
            </p>
            <a
              href="https://calendly.com/euler/15min"
              className="btn-secondary text-lg px-8 py-4"
              data-goal="lead"
            >
              Get Writing Quote
            </a>
          </div>
        </div>
      </section>

      

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Writing Services We Offer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From SEO-optimized blog posts to technical documentation, we create content that converts and ranks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">SEO Blog Posts</h3>
              <p className="text-gray-600 mb-4">
                Keyword-researched blog posts with Grammarly 95+ quality scores and royalty-free images.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Keyword research & optimization</li>
                <li>• Grammarly 95+ quality score</li>
                <li>• Royalty-free images included</li>
                <li>• Meta descriptions & titles</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Technical Documentation</h3>
              <p className="text-gray-600 mb-4">
                Clear, comprehensive technical docs that developers and users can easily understand.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• API documentation</li>
                <li>• User guides & tutorials</li>
                <li>• Code comments & READMEs</li>
                <li>• Troubleshooting guides</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Marketing Copy</h3>
              <p className="text-gray-600 mb-4">
                Conversion-focused copy for landing pages, ads, and email campaigns.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Landing page copy</li>
                <li>• Ad copy & headlines</li>
                <li>• Email sequences</li>
                <li>• Sales pages</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Product Descriptions</h3>
              <p className="text-gray-600 mb-4">
                Compelling product descriptions that highlight benefits and drive conversions.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• E-commerce descriptions</li>
                <li>• Feature highlights</li>
                <li>• Benefit-focused copy</li>
                <li>• SEO optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Social Media Content</h3>
              <p className="text-gray-600 mb-4">
                Engaging social media posts and captions that drive engagement and growth.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Instagram captions</li>
                <li>• LinkedIn posts</li>
                <li>• Twitter threads</li>
                <li>• Facebook content</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">White Papers & Reports</h3>
              <p className="text-gray-600 mb-4">
                In-depth research documents and industry reports that establish thought leadership.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Industry analysis</li>
                <li>• Research reports</li>
                <li>• Case study writing</li>
                <li>• Executive summaries</li>
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
              Our Writing Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research to final delivery, we follow a proven process that ensures quality and SEO optimization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Research</h3>
              <p className="text-gray-600">Keyword research, competitor analysis, and topic exploration for optimal SEO.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Outline</h3>
              <p className="text-gray-600">Structured outline with key points, headings, and SEO elements mapped out.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Writing</h3>
              <p className="text-gray-600">High-quality content creation with Grammarly integration for grammar and style.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">SEO optimization, readability checks, and final quality assurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every piece of content meets our high standards for quality, SEO, and readability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">95+</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Grammarly Score</h3>
              <p className="text-gray-600">Every piece of content achieves a Grammarly score of 95 or higher.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">100%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Original Content</h3>
              <p className="text-gray-600">All content is 100% original with plagiarism checks completed.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">SEO</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Optimized</h3>
              <p className="text-gray-600">Keyword-optimized content with proper meta tags and structure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-gray-50">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Writing Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our content has helped businesses improve their SEO rankings and engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {writingCaseStudies.map((caseStudy, index) => (
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
              Popular Writing Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fixed-price packages for common writing needs with guaranteed quality and delivery times.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {writingPackages.map((pkg, index) => (
              <PackageCard key={index} package={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Need Quality Content?"
        description="Get professional writing services with guaranteed Grammarly 95+ quality scores and SEO optimization."
      />
    </>
  )
}
