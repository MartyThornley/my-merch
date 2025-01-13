import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { UserScore } from '@/components/UserScore'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <Navigation />
      <main className="flex-1 overflow-y-auto p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <UserScore />
          <Outlet />
        </div>
      </main>
    </div>
  )
}