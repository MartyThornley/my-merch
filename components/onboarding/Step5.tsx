import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { useNavigate } from 'react-router-dom'

export function Step5({ formData, updateFormData, prevStep }) {
  const navigate = useNavigate()
  const productCategories = [
    'Shirts',
    'Mugs',
    'Plushies',
    'Phone Cases',
    'Posters',
    'Stickers',
  ]

  const handleCategoryChange = (category) => {
    const updatedCategories = formData.productCategories.includes(category)
      ? formData.productCategories.filter((c) => c !== category)
      : [...formData.productCategories, category]
    updateFormData({ productCategories: updatedCategories })
  }

  const handleSubmit = () => {
    // Save the form data
    const savedData = {
      ...formData,
      setupComplete: true
    }
    localStorage.setItem('creatorData', JSON.stringify(savedData))
    
    // Navigate to the Idea Factory
    navigate('/dashboard')
  }

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Select product categories</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {productCategories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
            <Checkbox
              id={category}
              checked={formData.productCategories.includes(category)}
              onCheckedChange={() => handleCategoryChange(category)}
            />
            <Label htmlFor={category}>{category}</Label>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={formData.productCategories.length === 0}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Complete Setup
        </Button>
      </div>
    </div>
  )
}