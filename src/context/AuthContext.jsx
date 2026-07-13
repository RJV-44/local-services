import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('auth_user')
    return stored ? JSON.parse(stored) : null
  })

  const login = (userData) => {
    setUser(userData)
    localStorage.setItem('auth_user', JSON.stringify(userData))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('auth_user')
    window.location.hash = '#home'
  }

  const isAuthenticated = !!user
  const isAdmin = user?.role === 'admin'
  const isCustomer = user?.role === 'customer'
  const isProvider = user?.role === 'provider'

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated, isAdmin, isCustomer, isProvider }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within an AuthProvider')
  return context
}

export default AuthContext