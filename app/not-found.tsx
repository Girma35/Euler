import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-lg w-full text-center px-6">
        <div className="mb-8">
          <Image
            src="/business%20Logo.png"
            alt="Euler Logo"
            width={100}
            height={100}
            className="mx-auto"
            priority
          />
        </div>
        
        <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="btn-primary px-8 py-3 text-lg"
            >
              🏠 Go Home
            </Link>
            <Link
              href="/contact"
              className="btn-secondary px-8 py-3 text-lg"
            >
              📞 Contact Support
            </Link>
          </div>
          
          <div className="text-sm text-gray-500">
            <p>Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link href="/services" className="text-primary hover:text-cyan-800 underline">
                Services
              </Link>
              <Link href="/packages" className="text-primary hover:text-cyan-800 underline">
                Packages
              </Link>
              <Link href="/case-studies" className="text-primary hover:text-cyan-800 underline">
                Case Studies
              </Link>
              <Link href="/about" className="text-primary hover:text-cyan-800 underline">
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
