import { YoutubeIcon, InstagramIcon as TiktokIcon, InstagramIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

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
            className="flex flex-col items-center p-4"
            onClick={() => updateFormData({ creatorType: type })}
          >
            <Icon className="w-8 h-8 mb-2" />
            <span>{type}</span>
          </Button>
        ))}
      </div>
      <Button onClick={nextStep} disabled={!formData.creatorType} className="w-full">
        Next
      </Button>
    </div>
  )
}

