import { Menu, Moon, Sun, Bell, User } from 'lucide-react'
import { useTheme } from '../../contexts/ThemeContext'
import { useAuth } from '../../contexts/AuthContext'

export default function Header({ onMenuClick, title }) {
  const { theme, toggleTheme } = useTheme()
  const { user } = useAuth()

  return (
    <header className="sticky top-0 z-30 h-16 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Menu size={20} />
          </button>
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Notificações */}
          <button className="relative p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bell size={20} className="text-gray-500 dark:text-gray-400" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? (
              <Sun size={20} className="text-amber-400" />
            ) : (
              <Moon size={20} className="text-gray-500" />
            )}
          </button>

          {/* User Avatar */}
          <div className="flex items-center gap-2 ml-1 pl-3 border-l border-gray-200 dark:border-gray-700">
            <div className="w-8 h-8 bg-brand-100 dark:bg-brand-900 rounded-full flex items-center justify-center">
              <User size={16} className="text-brand-600 dark:text-brand-400" />
            </div>
            <span className="hidden sm:block text-sm font-medium text-gray-700 dark:text-gray-300">
              {user?.name || 'Usuário'}
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
