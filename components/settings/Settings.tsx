'use client'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Save, Trash2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export function Settings() {
  const { toast } = useToast()
  const navigate = useNavigate()
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

  const handleDeleteData = () => {
    localStorage.removeItem('creatorData')
    toast({
      title: "Data Deleted",
      description: "All customization data has been removed",
    })
    navigate('/dashboard/customization')
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

        <div className="border-t pt-6 mt-6">
          <h3 className="text-lg font-semibold text-red-600 mb-4">Danger Zone</h3>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive" className="w-full sm:w-auto">
                <Trash2 className="w-4 h-4 mr-2" />
                Delete All Customization Data
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete all your customization data
                  including your font preferences, color choices, and other settings.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleDeleteData} className="bg-red-600 hover:bg-red-700 text-white font-bold">
                  Delete Data
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  )
}