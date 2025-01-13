import { Youtube, Instagram } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Step1({ formData, updateFormData, nextStep }) {
  const creatorTypes = [
    { type: 'YouTuber', icon: Youtube, color: 'text-red-600' },
    { 
      type: 'TikTok Creator', 
      icon: () => (
        <svg 
          viewBox="0 0 24 24" 
          className="w-full h-full"
          fill="currentColor"
        >
          <path d="M19.321 5.562a5.122 5.122 0 0 1-.443-.258 6.228 6.228 0 0 1-1.138-1.009 6.268 6.268 0 0 1-1.362-2.618h.004C16.247.924 16.25 0 16.25 0h-3.436v16.242c0 .914-.183 1.718-.546 2.368a4.02 4.02 0 0 1-.975 1.187 4.037 4.037 0 0 1-1.336.722 4.596 4.596 0 0 1-1.52.245c-.777 0-1.504-.15-2.149-.45a4.777 4.777 0 0 1-1.667-1.22 4.937 4.937 0 0 1-1.025-1.747 5.003 5.003 0 0 1-.218-2.006c.054-.71.247-1.39.574-2.045a4.874 4.874 0 0 1 1.358-1.645 4.582 4.582 0 0 1 1.935-.935 4.416 4.416 0 0 1 1.46-.082v-3.622a8.046 8.046 0 0 0-2.402.446 7.955 7.955 0 0 0-2.183 1.203 8.108 8.108 0 0 0-1.712 1.828 8.106 8.106 0 0 0-1.112 2.302 7.975 7.975 0 0 0-.267 3.374 8.13 8.13 0 0 0 .972 2.952 8.103 8.103 0 0 0 1.972 2.277 8.197 8.197 0 0 0 2.727 1.415 8.323 8.323 0 0 0 3.233.363 8.023 8.023 0 0 0 2.892-.793 7.967 7.967 0 0 0 2.324-1.79 7.945 7.945 0 0 0 1.504-2.501 7.88 7.88 0 0 0 .449-2.915V7.749c.353.198.72.37 1.1.517a9.292 9.292 0 0 0 1.474.47c.524.123 1.063.196 1.614.217V5.564c-.233-.003-.447-.027-.642-.071a4.29 4.29 0 0 1-.624-.17 5.617 5.617 0 0 1-.68-.293z"/>
        </svg>
      ),
      color: 'text-black'
    },
    { type: 'Instagram Creator', icon: Instagram, color: 'text-pink-600' },
  ]

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-semibold">What type of creator are you?</h2>
        <p className="text-gray-500">Choose your primary content platform</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {creatorTypes.map(({ type, icon: Icon, color }) => (
          <Button
            key={type}
            variant={formData.creatorType === type ? 'default' : 'outline'}
            className={cn(
              'flex flex-col items-center py-8 h-auto gap-4 transition-all',
              formData.creatorType === type ? 'bg-purple-600 hover:bg-purple-700' : 'hover:bg-purple-50'
            )}
            onClick={() => updateFormData({ creatorType: type })}
          >
            <div className={cn('w-8 h-8', formData.creatorType === type ? 'text-white' : color)}>
              <Icon />
            </div>
            <span className={cn(
              'text-sm font-medium',
              formData.creatorType === type ? 'text-white' : 'text-gray-700'
            )}>{type}</span>
          </Button>
        ))}
      </div>

      <Button 
        onClick={nextStep} 
        disabled={!formData.creatorType} 
        className="w-full bg-purple-600 hover:bg-purple-700"
      >
        Continue
      </Button>
    </div>
  )
}