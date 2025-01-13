import { YoutubeIcon, InstagramIcon as TiktokIcon, InstagramIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Step1({ formData, updateFormData, nextStep }) {
  const creatorTypes = [
    { type: 'YouTuber', icon: YoutubeIcon },
    { type: 'TikTok Influencer', icon: TiktokIcon },
    { type: 'Instagram Creator', icon: InstagramIcon },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Who are you?</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {creatorTypes.map(({ type, icon: Icon }) => (
          <Button
            key={type}
            variant={formData.creatorType === type ? 'default' : 'outline'}
            className={cn(
              'flex flex-col items-center py-6 h-auto gap-3',
              formData.creatorType === type ? 'bg-purple-600 hover:bg-purple-700' : 'hover:bg-purple-50'
            )}
            onClick={() => updateFormData({ creatorType: type })}
          >
            <Icon className="w-6 h-6" />
            <span className="text-sm font-medium">{type}</span>
          </Button>
        ))}
      </div>
      <Button 
        onClick={nextStep} 
        disabled={!formData.creatorType} 
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        Next
      </Button>
    </div>
  )
}