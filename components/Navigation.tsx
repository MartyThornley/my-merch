'use client'

import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet'
import { Home, Lightbulb, LogOut, CheckSquare, Settings, BarChart, TrendingUp, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '@/src/contexts/AuthContext'

const navItems = [
  { name: 'AI Merch Factory', href: '/dashboard', icon: Lightbulb },
  { name: 'Idea Vault', href: '/dashboard/approval-workflow', icon: CheckSquare },
  { name: 'Production', href: '/dashboard/production-tracker', icon: BarChart },
  { name: 'Customization', href: '/dashboard/customization', icon: Home },
  { name: 'Analytics', href: '/dashboard/analytics', icon: TrendingUp },
  { name: 'Account', href: '/dashboard/settings', icon: Settings },
]

export function Navigation() {
  const { logout } = useAuth()
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const hasCustomization = localStorage.getItem('creatorData') !== null

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (!hasCustomization) {
    return null
  }

  const NavContent = () => (
    <>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-600 mb-2">MyMerch.ai</h1>
        <p className="text-sm text-gray-600">Turn your creativity into awesome products!</p>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              asChild
              variant="ghost"
              className={cn(
                'w-full justify-start text-left font-normal transition-none',
                location.pathname === item.href && 'bg-purple-100 text-purple-700'
              )}
              onClick={() => setIsOpen(false)}
            >
              <Link to={item.href} className="flex items-center">
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={logout}
        className="absolute bottom-0 left-2 text-gray-500 hover:text-gray-700"
      >
        <LogOut className="h-4 w-4 mr-2" />
        Logout
      </Button>
    </>
  )

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-50">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4">
          <SheetTitle className="text-left">Navigation Menu</SheetTitle>
          <NavContent />
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <nav className="hidden md:block w-64 bg-white border-r border-gray-200 p-4">
      <NavContent />
    </nav>
  )
}