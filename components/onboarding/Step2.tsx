import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function Step2({ formData, updateFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Describe your content</h2>
      <Input
        placeholder="e.g., Fashion videos, Gaming streams, Cooking tutorials"
        value={formData.contentDescription}
        onChange={(e) => updateFormData({ contentDescription: e.target.value })}
        className="mb-6"
      />
      <div className="flex justify-between">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button onClick={nextStep} disabled={!formData.contentDescription}>
          Next
        </Button>
      </div>
    </div>
  )
}

