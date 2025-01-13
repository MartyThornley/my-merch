import { Onboarding } from '@/components/onboarding/Onboarding'

export default function CustomizationPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Customize Your MyMerch.ai Experience</h1>
      <p className="text-xl mb-8 text-gray-600">Let's turn your awesome ideas into cool products!</p>
      <div className="p-1 rounded-lg mb-8">
        <Onboarding />
      </div>
    </div>
  )
}