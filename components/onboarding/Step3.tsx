import * as React from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const fontStyles = {
  modern: {
    name: 'Modern',
    description: 'Clean and contemporary',
    fonts: ['font-inter', 'font-roboto', 'font-openSans'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-inter'
  },
  technical: {
    name: 'Technical',
    description: 'Professional and precise',
    fonts: ['font-jetBrainsMono', 'font-sourceCodePro', 'font-firaCode'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-jetBrainsMono'
  },
  playful: {
    name: 'Playful',
    description: 'Fun and energetic',
    fonts: ['font-fredoka', 'font-comicNeue', 'font-bubblegumSans'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-fredoka'
  },
  elegant: {
    name: 'Elegant',
    description: 'Sophisticated and refined',
    fonts: ['font-playfairDisplay', 'font-cormorant', 'font-libreBaskerville'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-playfairDisplay'
  },
  bold: {
    name: 'Bold',
    description: 'Strong and impactful',
    fonts: ['font-montserrat', 'font-raleway', 'font-poppins'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-montserrat'
  },
  retro: {
    name: 'Retro',
    description: 'Vintage and nostalgic',
    fonts: ['font-pressStart2P', 'font-vt323', 'font-pixel'],
    sample: 'The quick brown fox jumps over the lazy dog',
    headerFont: 'font-pressStart2P'
  }
}

const colorPalettes = {
  vibrant: {
    name: 'Vibrant',
    description: 'Bold and energetic',
    colors: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'],
    primary: '#FF6B6B'
  },
  pastel: {
    name: 'Pastel',
    description: 'Soft and soothing',
    colors: ['#FFB5B5', '#A8E6CF', '#DCD3FF', '#FFD3B6', '#FFAAA5'],
    primary: '#FFB5B5'
  },
  monochrome: {
    name: 'Monochrome',
    description: 'Clean and professional',
    colors: ['#2C3E50', '#34495E', '#7F8C8D', '#95A5A6', '#BDC3C7'],
    primary: '#2C3E50'
  },
  neon: {
    name: 'Neon',
    description: 'Bright and futuristic',
    colors: ['#FF1493', '#00FF00', '#00FFFF', '#FF4500', '#FFD700'],
    primary: '#FF1493'
  },
  earthy: {
    name: 'Earthy',
    description: 'Natural and grounded',
    colors: ['#8B4513', '#DAA520', '#556B2F', '#8FBC8F', '#D2B48C'],
    primary: '#8B4513'
  },
  minimal: {
    name: 'Minimal',
    description: 'Simple and elegant',
    colors: ['#000000', '#333333', '#666666', '#999999', '#FFFFFF'],
    primary: '#000000'
  }
}

export function Step3({ formData, updateFormData, nextStep, prevStep }) {
  const [currentStep, setCurrentStep] = React.useState('fonts')

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">
        {currentStep === 'fonts' ? 'Choose your font style' : 'Choose your color palette'}
      </h2>
      <p className="text-gray-600 mb-6">
        {currentStep === 'fonts' 
          ? 'Select a font style that matches your brand personality' 
          : 'Select a color palette that represents your brand'}
      </p>
      
      {currentStep === 'fonts' ? (
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
                  className={`font-semibold text-left text-lg ${style.headerFont}`}
                >
                  {style.name}
                </span>
                <span className={`text-sm opacity-90 ${style.headerFont}`}>{style.description}</span>
              </div>
            </Button>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {Object.entries(colorPalettes).map(([key, palette]) => (
            <Button
              key={key}
              variant={formData.colorPreference === key ? 'default' : 'outline'}
              className={cn(
                'h-auto p-4 flex flex-col items-start gap-2 transition-all',
                formData.colorPreference === key ? 'bg-purple-600 hover:bg-purple-700 text-white' : 'hover:bg-purple-50'
              )}
              onClick={() => updateFormData({ colorPreference: key })}
            >
              <div className="flex flex-col items-start w-full">
                <span className="font-semibold text-left text-lg">{palette.name}</span>
                <span className="text-sm opacity-90">{palette.description}</span>
                <div className="flex gap-1 mt-2">
                  {palette.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </Button>
          ))}
        </div>
      )}

      <div className="flex justify-between">
        {currentStep === 'fonts' ? (
          <>
            <Button onClick={prevStep} variant="outline">
              Back
            </Button>
            <Button
              onClick={() => setCurrentStep('colors')}
              disabled={!formData.fontPreference}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next
            </Button>
          </>
        ) : (
          <>
            <Button onClick={() => setCurrentStep('fonts')} variant="outline">
              Back
            </Button>
            <Button
              onClick={nextStep}
              disabled={!formData.colorPreference}
              className="bg-purple-600 hover:bg-purple-700"
            >
              Next
            </Button>
          </>
        )}
      </div>
    </div>
  )
}