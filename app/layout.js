export const metadata = {
  title: 'Profile',
  description: 'Personal profile website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}