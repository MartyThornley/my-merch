'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Home, Lightbulb, CheckSquare, Settings, BarChart, TrendingUp } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Idea Factory', href: '/product-ideas', icon: Lightbulb },
  { name: 'Idea Vault', href: '/approval-workflow', icon: CheckSquare },
  { name: 'Creator HQ', href: '/settings', icon: Settings },
  { name: 'Production Lab', href: '/production-tracker', icon: BarChart },
  { name: 'Creator Analytics', href: '/analytics', icon: TrendingUp },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-purple-600 mb-2">Creator Idea Factory</h1>
        <p className="text-sm text-gray-600">Turn your creativity into awesome products!</p>
      </div>
      <ul className="space-y-2">
        {navItems.map((item) => (
          <li key={item.name}>
            <Button
              asChild
              variant="ghost"
              className={cn(
                'w-full justify-start text-left font-normal',
                pathname === item.href && 'bg-purple-100 text-purple-700'
              )}
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.name}
              </Link>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

