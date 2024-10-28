import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Late-o-matic 3000',
  description: 'Because saving the multiverse is a perfectly valid reason for missing your morning standup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
