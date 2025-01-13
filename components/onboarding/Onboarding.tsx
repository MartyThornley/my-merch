'use client'

import { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Progress } from '@/components/ui/progress'

const steps = [
  { title: 'Creator Type', component: Step1 },
  { title: 'Content Description', component: Step2 },
  { title: 'Style Preferences', component: Step3 },
  { title: 'Upload Assets', component: Step4 },
  { title: 'Product Categories', component: Step5 },
]

export function Onboarding() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    creatorType: '',
    contentDescription: '',
    fontPreference: '',
    colorPreference: '',
    images: [],
    productCategories: [],
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const CurrentStep = steps[step - 1].component

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-purple-600 font-medium">Step {step} of 5</span>
            <span className="text-gray-500">{steps[step - 1].title}</span>
          </div>
          <Progress value={(step / 5) * 100} className="h-2" />
        </div>
        
        <CurrentStep 
          formData={formData} 
          updateFormData={updateFormData} 
          nextStep={nextStep} 
          prevStep={prevStep} 
        />
      </div>
    </div>
  )
}