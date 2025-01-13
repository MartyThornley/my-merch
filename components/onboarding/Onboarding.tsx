'use client'

import { useState } from 'react'
import { Step1 } from './Step1'
import { Step2 } from './Step2'
import { Step3 } from './Step3'
import { Step4 } from './Step4'
import { Step5 } from './Step5'
import { Progress } from '@/components/ui/progress'

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

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <Progress value={(step / 5) * 100} className="mb-4" />
        {step === 1 && <Step1 formData={formData} updateFormData={updateFormData} nextStep={nextStep} />}
        {step === 2 && <Step2 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 formData={formData} updateFormData={updateFormData} nextStep={nextStep} prevStep={prevStep} />}
        {step === 5 && <Step5 formData={formData} updateFormData={updateFormData} prevStep={prevStep} />}
      </div>
    </div>
  )
}

