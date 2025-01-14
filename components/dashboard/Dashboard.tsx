'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ThumbsUp, ThumbsDown, Repeat, MessageSquare, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useDrag } from '@use-gesture/react'
import ideasData from '@/config/ideas.json'

export function Dashboard() {
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0)
  const [approvedIdeas, setApprovedIdeas] = useState([])
  const [declinedIdeas, setDeclinedIdeas] = useState([])
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [exitX, setExitX] = useState(0)

  const currentIdea = ideasData.placeholderIdeas[currentIdeaIndex]

  const handleSwipe = (approved) => {
    if (approved) {
      setApprovedIdeas([...approvedIdeas, currentIdea])
      setExitX(200)
    } else {
      setDeclinedIdeas([...declinedIdeas, currentIdea])
      setExitX(-200)
    }
    
    // Reset all items if we've gone through them all
    if (currentIdeaIndex === ideasData.placeholderIdeas.length - 1) {
      setTimeout(() => {
        setCurrentIdeaIndex(0)
        setApprovedIdeas([])
        setDeclinedIdeas([])
      }, 500) // Wait for exit animation
    } else {
      setTimeout(() => {
        setCurrentIdeaIndex((prevIndex) => prevIndex + 1)
      }, 500) // Wait for exit animation
    }
  }

  const bindDragGesture = useDrag(({ movement: [mx], direction: [dx], swipe: [swipeX], tap, last }) => {
    if (tap) return // Ignore taps

    // Handle swipe
    if (swipeX) {
      if (swipeX > 0) {
        setSwipeDirection('right')
        handleSwipe(true)
      } else {
        setSwipeDirection('left')
        handleSwipe(false)
      }
      return
    }

    // Handle drag
    const rotation = mx / 20
    const scale = 1 - Math.abs(mx) / 1000
    const x = mx
    
    const card = document.querySelector('.idea-card')
    if (card) {
      card.style.transform = `translateX(${x}px) rotate(${rotation}deg) scale(${scale})`
    }
    
    // Show approval indicators based on drag direction
    if (mx > 50) {
      setSwipeDirection('right')
    } else if (mx < -50) {
      setSwipeDirection('left')
    } else {
      setSwipeDirection(null)
    }

    // Handle release
    if (last) {
      if (Math.abs(mx) > 100) {
        // Swipe threshold met
        handleSwipe(mx > 0)
      } else {
        // Reset position
        if (card) {
          card.style.transform = `translateX(0px) rotate(0deg) scale(1)`
        }
        setSwipeDirection(null)
      }
    }
  }, {
    from: () => [parseFloat(document.querySelector('.idea-card')?.style.transform.split('translateX(')[1]) || 0, 0],
    filterTaps: true,
    swipe: {distance: 50},
    rubberband: true
  })

  return (
    <div className="max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdea.id}
          initial={{ opacity: 0, scale: 0.8, x: 0 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ 
            opacity: 0,
            scale: 0.8,
            x: exitX,
            transition: { duration: 0.3 }
          }}
          {...bindDragGesture()}
          className="idea-card touch-none"
        >
          <Card className="mb-6 overflow-hidden relative">
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
              
              {/* Approval indicators */}
              <div className={`absolute inset-0 bg-green-500/20 flex items-center justify-center transition-opacity ${swipeDirection === 'right' ? 'opacity-100' : 'opacity-0'}`}>
                <ThumbsUp className="w-24 h-24 text-green-500" />
              </div>
              <div className={`absolute inset-0 bg-red-500/20 flex items-center justify-center transition-opacity ${swipeDirection === 'left' ? 'opacity-100' : 'opacity-0'}`}>
                <ThumbsDown className="w-24 h-24 text-red-500" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-lg font-bold text-purple-600">{currentIdea.description}</p>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

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