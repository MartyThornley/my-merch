import { Routes, Route } from 'react-router-dom'
import { LandingPage } from '@/components/marketing/LandingPage'
import { Dashboard } from '@/components/dashboard/Dashboard'
import { Analytics } from '@/components/analytics/Analytics'
import { ApprovalWorkflow } from '@/components/approval/ApprovalWorkflow'
import { ProductionTracker } from '@/components/production/ProductionTracker'
import { Settings } from '@/components/settings/Settings'
import { Onboarding } from '@/components/onboarding/Onboarding'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="approval-workflow" element={<ApprovalWorkflow />} />
        <Route path="production-tracker" element={<ProductionTracker />} />
        <Route path="settings" element={<Settings />} />
        <Route path="customization" element={<Onboarding />} />
      </Route>
    </Routes>
  )
}

export default App