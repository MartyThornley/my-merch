import { Routes, Route, Navigate } from 'react-router-dom'
import { LandingPage } from '@/components/marketing/LandingPage'
import { LoginPage } from '@/components/auth/LoginPage'
import { Dashboard } from '@/components/dashboard/Dashboard'
import { Analytics } from '@/components/analytics/Analytics'
import { ApprovalWorkflow } from '@/components/approval/ApprovalWorkflow'
import { ProductionTracker } from '@/components/production/ProductionTracker'
import { Settings } from '@/components/settings/Settings'
import { Onboarding } from '@/components/onboarding/Onboarding'
import { ProtectedRoute } from '@/components/auth/ProtectedRoute'
import { AuthProvider } from '@/src/contexts/AuthContext'
import DashboardLayout from './layouts/DashboardLayout'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }>
          <Route index element={<RequireCustomization><Dashboard /></RequireCustomization>} />
          <Route path="analytics" element={<RequireCustomization><Analytics /></RequireCustomization>} />
          <Route path="approval-workflow" element={<RequireCustomization><ApprovalWorkflow /></RequireCustomization>} />
          <Route path="production-tracker" element={<RequireCustomization><ProductionTracker /></RequireCustomization>} />
          <Route path="settings" element={<RequireCustomization><Settings /></RequireCustomization>} />
          <Route path="customization" element={<Onboarding />} />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

function RequireCustomization({ children }: { children: React.ReactNode }) {
  const hasCustomization = localStorage.getItem('creatorData') !== null
  
  if (!hasCustomization) {
    return <Navigate to="/dashboard/customization" replace />
  }

  return <>{children}</>
}

export default App