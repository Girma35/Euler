import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services - Remote, Fixed-Price, 24-h Delivery',
  description: 'Explore Euler\'s core services: Development, Writing, and Growth. Remote, fixed-price offers with 24-h delivery.',
  alternates: { canonical: '/services' }
}

export default function ServicesIndexPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-cyan-800 text-white py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Services</h1>
            <p className="text-xl md:text-2xl text-cyan-100">
              Remote, fixed-price packages with 24-h delivery. Choose a category to get started.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container-max section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/services/development" className="block bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development</h3>
              <p className="text-gray-600">Bug fixes, MERN apps, Telegram bots, landing pages—tested, deployed, guaranteed.</p>
              <span className="mt-4 inline-block text-primary font-medium">Explore →</span>
            </Link>

            <Link href="/services/writing" className="block bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Writing</h3>
              <p className="text-gray-600">SEO blogs, technical docs, marketing copy—Grammarly 95+, keyword-optimized.</p>
              <span className="mt-4 inline-block text-primary font-medium">Explore →</span>
            </Link>

            <Link href="/services/growth" className="block bg-gray-50 p-8 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Social sprints, content calendars, influencer outreach—consistent month-over-month growth.</p>
              <span className="mt-4 inline-block text-primary font-medium">Explore →</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}



