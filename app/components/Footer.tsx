import Link from 'next/link'
import Image from 'next/image'
import SocialMedia from './SocialMedia'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/business%20Logo.png"
                alt="Euler Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold">Euler</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Remote coding, writing & growth services delivered in 48 hrs. 
              Fixed prices, guaranteed delivery, or it's free.
            </p>
            <div className="flex space-x-4 mb-4">
              <a href="https://calendly.com/euler/15min" className="btn-primary" data-goal="lead">
                Book Free Call
              </a>
            </div>
            <SocialMedia />
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/development" className="text-gray-300 hover:text-white transition-colors">
                  Development
                </Link>
              </li>
              <li>
                <Link href="/services/writing" className="text-gray-300 hover:text-white transition-colors">
                  Writing
                </Link>
              </li>
              <li>
                <Link href="/services/growth" className="text-gray-300 hover:text-white transition-colors">
                  Growth
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-gray-300 hover:text-white transition-colors">
                  Packages
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Euler. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
