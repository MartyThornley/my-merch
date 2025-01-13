import { Settings } from '@/components/settings/Settings'

export default function SettingsPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Creator HQ</h1>
      <p className="text-xl mb-8 text-gray-600">Customize your creator profile!</p>
      <Settings />
    </div>
  )
}