'use client'

import { Link } from 'react-router-dom'

export function DashboardHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-center px-4 md:hidden z-40">
      <Link to="/dashboard" className="text-xl font-bold text-purple-600">
        MyMerch.ai
      </Link>
    </header>
  )
}