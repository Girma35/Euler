export interface Package {
  category: 'dev' | 'writing' | 'growth'
  name: string
  price: number
  tag: string
  bullets: string[]
}

export const packages: Package[] = [
  {
    category: 'dev',
    name: 'Bug-Fix Express',
    price: 49,
    tag: '≤2 h fix',
    bullets: ['Same-day merge', 'Test included', '14-day warranty']
  },
  {
    category: 'dev',
    name: 'Landing-Page-24h',
    price: 149,
    tag: '1 pager',
    bullets: ['SEO ready', '90+ speed', '2 revisions', 'Vercel deploy']
  },
  {
    category: 'dev',
    name: 'Telegram Bot MVP',
    price: 99,
    tag: '48 h delivery',
    bullets: ['/start', 'Captcha', 'Referral', 'Admin panel']
  },
  {
    category: 'writing',
    name: 'SEO Blog Post',
    price: 20,
    tag: '1 000 words',
    bullets: ['Keyword research', 'Grammarly 95', 'Royalty-free image']
  },
  {
    category: 'growth',
    name: '30-Day Social Sprint',
    price: 149,
    tag: '60 posts + 30 reels',
    bullets: ['Hashtag research', 'Growth report', 'Caption copy']
  }
]
