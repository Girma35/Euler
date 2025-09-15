export interface CaseStudy {
  slug: string
  client: string
  service: string
  result: string
  testimonial: string
  category: 'dev' | 'writing' | 'growth'
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'react-conversion-boost',
    client: 'Acme SaaS',
    service: 'Bug fix',
    result: '+8 % checkout conversion',
    testimonial: 'Euler patched our router bug in 45 min.',
    category: 'dev'
  },
  {
    slug: 'telegram-airdrop-4k',
    client: 'LedgerCoin',
    service: 'Telegram bot',
    result: '4 000 new users',
    testimonial: 'Bot delivered overnight, zero downtime.',
    category: 'dev'
  },
  {
    slug: 'tiktok-22k-growth',
    client: 'StyleApp',
    service: 'Social growth',
    result: '+22 k followers',
    testimonial: 'Consistent 30-day content engine.',
    category: 'growth'
  }
]
