'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Repeat, MessageSquare, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

// Placeholder for AI-generated ideas
const placeholderIdeas = [
  {
    id: 1,
    image: '/placeholder.svg',
    description: 'Epic Roblox-themed gaming chair with built-in speakers',
  },
  {
    id: 2,
    image: '/placeholder.svg',
    description: 'Customizable LED stream backdrop for your gaming setup',
  },
  {
    id: 3,
    image: '/placeholder.svg',
    description: 'Roblox character-inspired wireless earbuds case',
  },
]

export function Dashboard() {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0)
  const [approvedIdeas, setApprovedIdeas] = useState([])
  const [declinedIdeas, setDeclinedIdeas] = useState([])

  const currentIdea = placeholderIdeas[currentIdeaIndex]

  const handleSwipe = (approved) => {
    if (approved) {
      setApprovedIdeas([...approvedIdeas, currentIdea])
    } else {
      setDeclinedIdeas([...declinedIdeas, currentIdea])
    }
    setCurrentIdeaIndex((prevIndex) => (prevIndex + 1) % placeholderIdeas.length)
  }

  return (
    <div className="max-w-md mx-auto">
      <motion.div
        key={currentIdea.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="mb-6 overflow-hidden">
          <div className="relative">
            <img
              src={currentIdea.image}
              alt="Product mockup"
              className="w-full h-64 object-cover"
            />
            <div className="absolute top-2 right-2 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-sm font-bold flex items-center">
              <Sparkles className="w-4 h-4 mr-1" />
              New Idea!
            </div>
          </div>
          <div className="p-4">
            <p className="text-lg font-bold text-purple-600">{currentIdea.description}</p>
          </div>
        </Card>
      </motion.div>
      <div className="flex justify-center space-x-4">
        <Button onClick={() => handleSwipe(false)} variant="outline" size="icon" className="bg-red-100 hover:bg-red-200">
          <ThumbsDown className="h-6 w-6 text-red-500" />
        </Button>
        <Button variant="outline" size="icon" className="bg-blue-100 hover:bg-blue-200">
          <Repeat className="h-6 w-6 text-blue-500" />
        </Button>
        <Button variant="outline" size="icon" className="bg-purple-100 hover:bg-purple-200">
          <MessageSquare className="h-6 w-6 text-purple-500" />
        </Button>
        <Button onClick={() => handleSwipe(true)} variant="outline" size="icon" className="bg-green-100 hover:bg-green-200">
          <ThumbsUp className="h-6 w-6 text-green-500" />
        </Button>
      </div>
    </div>
  )
}

