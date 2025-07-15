export const metadata = {
  title: 'Andy Fernandez - Software Engineer',
  description: 'Breaking code, building features! Software engineer passionate about coding, coffee, and road trips. Skilled in Python, React, and Cloud technologies.',
  keywords: 'Andy Fernandez, Software Engineer, Python, React, TypeScript, Cloud, Montevideo, Uruguay',
  authors: [{ name: 'Andy Fernandez' }],
  creator: 'Andy Fernandez',
  openGraph: {
    title: 'Andy Fernandez - Software Engineer',
    description: 'Breaking code, building features! Software engineer passionate about coding, coffee, and road trips.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andy Fernandez - Software Engineer',
    description: 'Breaking code, building features! Software engineer passionate about coding, coffee, and road trips.',
  },
}

import './globals.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.tailwindcss.com" strategy="beforeInteractive" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}