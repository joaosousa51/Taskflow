import { createContext, useContext, useState, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { mockUser } from '../utils/mockData'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useLocalStorage('taskflow-auth', false)
  const [user, setUser] = useLocalStorage('taskflow-user', null)
  const [loginError, setLoginError] = useState('')

  const login = useCallback((email, password) => {
    setLoginError('')

    // Simulação de autenticação
    if (email === 'admin@taskflow.com' && password === '123456') {
      setIsAuthenticated(true)
      setUser(mockUser)
      return true
    }

    setLoginError('Email ou senha inválidos. Use admin@taskflow.com / 123456')
    return false
  }, [setIsAuthenticated, setUser])

  const logout = useCallback(() => {
    setIsAuthenticated(false)
    setUser(null)
  }, [setIsAuthenticated, setUser])

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, loginError }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider')
  }
  return context
}
