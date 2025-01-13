import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Step3({ formData, updateFormData, nextStep, prevStep }) {
  const [previewText, setPreviewText] = useState('Preview Text')

  const handleFontChange = (e) => {
    updateFormData({ fontPreference: e.target.value })
    setPreviewText(`Preview Text in ${e.target.value}`)
  }

  const handleColorChange = (e) => {
    updateFormData({ colorPreference: e.target.value })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Choose your style preferences</h2>
      <div className="mb-4">
        <Label htmlFor="font">Font</Label>
        <Input
          id="font"
          type="text"
          placeholder="Enter font name"
          value={formData.fontPreference}
          onChange={handleFontChange}
          className="mb-2"
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          type="color"
          value={formData.colorPreference}
          onChange={handleColorChange}
          className="h-10 w-full"
        />
      </div>
      <div
        className="mb-6 p-4 border rounded"
        style={{
          fontFamily: formData.fontPreference || 'inherit',
          color: formData.colorPreference || 'inherit',
        }}
      >
        {previewText}
      </div>
      <div className="flex justify-between">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!formData.fontPreference || !formData.colorPreference}
        >
          Next
        </Button>
      </div>
    </div>
  )
}

