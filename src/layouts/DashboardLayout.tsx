import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { DashboardHeader } from '@/components/DashboardHeader'

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardHeader />
      <Navigation />
      <main id="mainContent" className="flex-1 overflow-y-auto w-full mt-6 md:mt-0">
        <div className="p-4 md:p-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6">

            <div className="md:hidden mb-4">
              <h1 className="text-2xl font-bold text-purple-600">
                {window.location.pathname === '/dashboard' ? 'Idea Factory' :
                 window.location.pathname === '/dashboard/customization' ? 'Customization' :
                 window.location.pathname === '/dashboard/approval-workflow' ? 'Idea Vault' :
                 window.location.pathname === '/dashboard/settings' ? 'Creator HQ' :
                 window.location.pathname === '/dashboard/production-tracker' ? 'Production Lab' :
                 window.location.pathname === '/dashboard/analytics' ? 'Creator Analytics' : ''}
              </h1>
            </div>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  )
}