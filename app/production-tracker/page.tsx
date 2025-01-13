import { ProductionTracker } from '@/components/production/ProductionTracker'

export default function ProductionTrackerPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Production Lab</h1>
      <p className="text-xl mb-8 text-gray-600">Watch your ideas come to life!</p>
      <ProductionTracker />
    </div>
  )
}

