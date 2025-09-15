import { Package } from '@/lib/data/packages'

interface PackageCardProps {
  package: Package
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
        <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
          {pkg.tag}
        </span>
      </div>
      
      <div className="mb-6">
        <span className="text-3xl font-bold text-primary">${pkg.price}</span>
        <span className="text-gray-600 ml-2">fixed price</span>
      </div>
      
      <ul className="space-y-2 mb-6">
        {pkg.bullets.map((bullet, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <svg className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {bullet}
          </li>
        ))}
      </ul>
      
      <a
        href="https://calendly.com/euler/15min"
        className="btn-primary w-full text-center block"
        data-goal="lead"
      >
        Get Started
      </a>
    </div>
  )
}
