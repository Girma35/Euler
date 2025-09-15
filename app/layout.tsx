import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Euler',
    default: 'Euler – Remote Coding, Writing & Growth Services Delivered in 48 hrs'
  },
  description: 'Hire Euler for bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 48 hrs delivery or it\'s free.',
  keywords: ['remote development', 'coding services', 'writing services', 'growth marketing', '48 hrs delivery', 'fixed price'],
  authors: [{ name: 'Euler' }],
  creator: 'Euler',
  publisher: 'Euler',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://euler.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://euler.com',
    title: 'Euler – Remote Coding, Writing & Growth Services Delivered in 48 hrs',
    description: 'Hire Euler for bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 48 hrs delivery or it\'s free.',
    siteName: 'Euler',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Euler - Remote Digital Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Euler – Remote Coding, Writing & Growth Services Delivered in 48 hrs',
    description: 'Hire Euler for bug fixes, MERN apps, Telegram bots, SEO blogs, social growth—fixed prices, 48 hrs delivery or it\'s free.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/business%20Logo.png" sizes="any" />
        <link rel="apple-touch-icon" href="/business%20Logo.png" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-XXXXXXX');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
