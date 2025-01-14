import { Outlet } from 'react-router-dom'
import { Navigation } from '@/components/Navigation'
import { DashboardHeader } from '@/components/DashboardHeader'

export default function DashboardLayout() {

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardHeader />
      <Navigation />
      <main className="flex-1 overflow-y-auto p-4 md:p-6 w-full">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 md:p-6 mt-14 md:mt-0">

          <div className="md:hidden">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold text-purple-600">
                {window.location.pathname === '/dashboard' ? 'Idea Factory' :
                 window.location.pathname === '/dashboard/customization' ? 'Customization' :
                 window.location.pathname === '/dashboard/approval-workflow' ? 'Idea Vault' :
                 window.location.pathname === '/dashboard/settings' ? 'Creator HQ' :
                 window.location.pathname === '/dashboard/production-tracker' ? 'Production Lab' :
                 window.location.pathname === '/dashboard/analytics' ? 'Creator Analytics' : ''}
              </h1>
            </div>
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}