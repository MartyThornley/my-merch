import type { Metadata } from 'next'
import './globals.css'
import { Navigation } from '@/components/Navigation'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Creator Idea Factory',
  description: 'Generate awesome product ideas for Roblox and content creators',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const DynamicUserScore = dynamic(() => import('@/components/UserScore').then(mod => mod.UserScore), { ssr: false })

  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
        <div className="flex h-screen">
          <Navigation />
          <main className="flex-1 overflow-y-auto p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
              <DynamicUserScore />
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
export default RootLayout

