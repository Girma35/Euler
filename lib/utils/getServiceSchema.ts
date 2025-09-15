interface ServiceSchemaProps {
  name: string
  description: string
  price: number
  category: string
  url: string
}

export function getServiceSchema({ name, description, price, category, url }: ServiceSchemaProps) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    category,
    url,
    provider: {
      '@type': 'Organization',
      name: 'Euler',
      url: 'https://euler.com'
    },
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString().split('T')[0]
    },
    areaServed: {
      '@type': 'Country',
      name: 'Worldwide'
    }
  }
}

