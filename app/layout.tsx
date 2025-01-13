import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MyMerch.ai',
  description: 'Generate awesome product ideas for Roblox and content creators',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
export default RootLayout