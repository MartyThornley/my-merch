import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function Step4({ formData, updateFormData, nextStep, prevStep }) {
  const [dragActive, setDragActive] = useState(false)

  const handleDrag = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files) => {
    updateFormData({ images: [...formData.images, ...Array.from(files)] })
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Upload your images</h2>
      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center ${
          dragActive ? 'border-primary' : 'border-gray-300'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <Label htmlFor="file-upload" className="cursor-pointer">
          <div>Drag and drop your images here, or click to select files</div>
          <Input
            id="file-upload"
            type="file"
            multiple
            onChange={handleChange}
            className="hidden"
          />
        </Label>
      </div>
      {formData.images.length > 0 && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Uploaded Images:</h3>
          <ul className="list-disc pl-5">
            {formData.images.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
      <div className="flex justify-between mt-6">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} disabled={formData.images.length === 0}>
          Next
        </Button>
      </div>
    </div>
  )
}

