import { Analytics } from '@/components/analytics/Analytics'
import { UserScore } from '@/components/UserScore'

export default function AnalyticsPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Creator Analytics</h1>
      <p className="text-xl mb-8 text-gray-600">See how your awesome products are performing!</p>
      <div className="hidden">
    <UserScore />
  </div>
      <Analytics />
    </div>
  )
}

