'use client'

import { useState, useEffect } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Progress } from '@/components/ui/progress'
import { useNavigate } from 'react-router-dom'
import { defaultCreatorData } from '@/config/creator.json'

const steps = [
  { title: 'Creator Type', component: Step1 },
  { title: 'Content Description', component: Step2 },
  { title: 'Style Preferences', component: Step3 },
  { title: 'Upload Assets', component: Step4 },
  { title: 'Product Categories', component: Step5 },
]

export function Onboarding() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('creatorData')
    return savedData ? JSON.parse(savedData) : {
      creatorType: '',
      contentDescription: '',
      fontPreference: '',
      colorPreference: '',
      images: [],
      productCategories: [],
    }
  })

  const updateFormData = (data: Partial<typeof formData>) => {
    const newData = { ...formData, ...data }
    setFormData(newData)
    localStorage.setItem('creatorData', JSON.stringify(newData))
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 5))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const handleComplete = () => {
    // Save default preferences along with form data
    const completeData = {
      ...formData,
      fonts: defaultCreatorData.fonts,
      colors: defaultCreatorData.colors,
      categories: defaultCreatorData.categories
    }
    localStorage.setItem('creatorData', JSON.stringify(completeData))
    navigate('/dashboard/settings')
  }

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
          nextStep={step === 5 ? handleComplete : nextStep} 
          prevStep={prevStep} 
        />
      </div>
    </div>
  )
}