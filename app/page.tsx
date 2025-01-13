import { Onboarding } from '@/components/onboarding/Onboarding'

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6 text-purple-600">Welcome to Creator Idea Factory!</h1>
      <p className="text-xl mb-8 text-gray-600">Let's turn your awesome ideas into cool products!</p>
      <div className="p-1 rounded-lg mb-8">
        <Onboarding />
      </div>
    </div>
  )
}

