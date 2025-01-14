'use client'

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Save } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function Settings() {
  const { toast } = useToast()
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('creatorData')
    return savedData ? JSON.parse(savedData) : {
      name: '',
      email: ''
    }
  })

  const [isDirty, setIsDirty] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    setIsDirty(true)
  }

  const handleSave = () => {
    localStorage.setItem('creatorData', JSON.stringify(formData))
    setIsDirty(false)
    toast({
      title: "Success",
      description: "Your profile has been updated",
    })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-purple-600">Profile</h2>
          <Button 
            onClick={handleSave}
            disabled={!isDirty}
            className="bg-purple-600 hover:bg-purple-700"
          >
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input 
              id="name" 
              value={formData.name || ''} 
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Your name" 
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={formData.email || ''} 
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="your@email.com" 
            />
          </div>
        </div>
      </div>
    </div>
  )
}