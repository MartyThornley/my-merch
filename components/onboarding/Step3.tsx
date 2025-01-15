import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fontStyles = {
  modern: {
    name: 'Modern',
    description: 'Clean and contemporary',
    fonts: ['Inter', 'Roboto', 'Open Sans'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'Inter'
  },
  technical: {
    name: 'Technical',
    description: 'Professional and precise',
    fonts: ['JetBrains Mono', 'Source Code Pro', 'Fira Code'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'JetBrains Mono'
  },
  playful: {
    name: 'Playful',
    description: 'Fun and energetic',
    fonts: ['Fredoka', 'Comic Neue', 'Bubblegum Sans'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'Fredoka'
  },
  elegant: {
    name: 'Elegant',
    description: 'Sophisticated and refined',
    fonts: ['Playfair Display', 'Cormorant', 'Libre Baskerville'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'Playfair Display'
  },
  bold: {
    name: 'Bold',
    description: 'Strong and impactful',
    fonts: ['Montserrat', 'Raleway', 'Poppins'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'Montserrat'
  },
  retro: {
    name: 'Retro',
    description: 'Vintage and nostalgic',
    fonts: ['Press Start 2P', 'VT323', 'Pixel'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'Press Start 2P'
  }
}

export function Step3({ formData, updateFormData, nextStep, prevStep }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Choose your style</h2>
      <p className="text-gray-600 mb-6">Select a font style that matches your brand personality</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {Object.entries(fontStyles).map(([key, style]) => (
          <Button
            key={key}
            variant={formData.fontPreference === key ? 'default' : 'outline'}
            className={cn(
              'h-auto p-4 flex flex-col items-start gap-2 transition-all',
              formData.fontPreference === key ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'hover:bg-purple-50'
            )}
            onClick={() => updateFormData({ fontPreference: key })}
          >
            <div className="flex flex-col items-start w-full">
              <span 
                className="font-semibold text-left text-lg"
                style={{ fontFamily: style.headerFont }}
              >
                {style.name}
              </span>
              <span className="text-sm opacity-90">{style.description}</span>
            </div>
            <div className="w-full mt-2 space-y-2">
              {style.fonts.map((font) => (
                <div
                  key={font}
                  className={cn(
                    'text-sm p-2 rounded',
                    formData.fontPreference === key ? 'bg-purple-700/50' : 'bg-gray-100'
                  )}
                  style={{ 
                    fontFamily: font,
                    fontSize: font === 'Press Start 2P' ? '0.7rem' : '0.875rem',
                    lineHeight: font === 'Press Start 2P' ? '1.5' : '1.25'
                  }}
                >
                  {style.sample}
                </div>
              ))}
            </div>
          </Button>
        ))}
      </div>

      <div className="flex justify-between">
        <Button onClick={prevStep} variant="outline">
          Back
        </Button>
        <Button
          onClick={nextStep}
          disabled={!formData.fontPreference}
          className="bg-purple-600 hover:bg-purple-700"
        >
          Next
        </Button>
      </div>
    </div>
  )
}