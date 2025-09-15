import { CaseStudy } from '@/lib/data/case-studies'
import Link from 'next/link'

interface CaseStudyCardProps {
  caseStudy: CaseStudy
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
          {caseStudy.service}
        </span>
      </div>
      
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{caseStudy.client}</h3>
      
      <div className="mb-4">
        <span className="text-2xl font-bold text-accent">{caseStudy.result}</span>
      </div>
      
      <blockquote className="text-gray-700 italic mb-6">
        "{caseStudy.testimonial}"
      </blockquote>
      
      <Link
        href={`/case-studies/${caseStudy.slug}`}
        className="text-primary hover:text-cyan-800 font-medium"
      >
        Read Full Case Study →
      </Link>
    </div>
  )
}

