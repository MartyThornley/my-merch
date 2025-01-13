'use client'

import { useState, useEffect } from 'react'
import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'

export function UserScore() {
  const [score, setScore] = useState(0)
  const [level, setLevel] = useState(1)

  useEffect(() => {
    // Simulate score increase over time
    const timer = setInterval(() => {
      setScore((prevScore) => {
        const newScore = prevScore + 1
        if (newScore % 100 === 0) {
          setLevel((prevLevel) => prevLevel + 1)
        }
        return newScore
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex items-center justify-between mb-4 bg-gray-100 p-3 rounded-lg">
      <div className="flex items-center">
        <Badge variant="outline" className="mr-2">Level {level}</Badge>
        <Progress value={score % 100} className="w-32" />
      </div>
      <div className="font-bold text-lg">{score} pts</div>
    </div>
  )
}

