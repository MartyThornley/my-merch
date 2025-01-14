import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

interface AuthContextType {
  isAuthenticated: boolean
  login: (password: string) => boolean
  logout: () => void
}

const AuthContext = createContext<AuthContextType | null>(null)

// In a real app, this would be stored securely and not in code
const DASHBOARD_PASSWORD = 'mymerch2024'

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const authStatus = localStorage.getItem('mymerch_auth')
    if (authStatus === 'true') {
      setIsAuthenticated(true)
      
      // Check for customization data on initial load
      const hasCustomization = localStorage.getItem('creatorData') !== null
      if (!hasCustomization && window.location.pathname !== '/dashboard/customization') {
        navigate('/dashboard/customization')
      }
    }
  }, [navigate])

  const login = (password: string) => {
    if (password === DASHBOARD_PASSWORD) {
      setIsAuthenticated(true)
      localStorage.setItem('mymerch_auth', 'true')
      
      // Check for customization data on login
      const hasCustomization = localStorage.getItem('creatorData') !== null
      navigate(hasCustomization ? '/dashboard' : '/dashboard/customization')
      
      return true
    }
    return false
  }

  const logout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('mymerch_auth')
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}