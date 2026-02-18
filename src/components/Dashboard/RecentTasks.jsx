import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getStatusColor, getStatusLabel, getPriorityIcon, getRelativeTime } from '../../utils/helpers'

export default function RecentTasks({ tasks }) {
  const recentTasks = tasks
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5)

  return (
    <div className="card p-5 animate-fadeIn" style={{ animationDelay: '300ms' }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Tarefas Recentes
        </h3>
        <Link
          to="/tarefas"
          className="flex items-center gap-1 text-xs font-medium text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
        >
          Ver todas
          <ArrowRight size={14} />
        </Link>
      </div>

      <div className="space-y-3">
        {recentTasks.map((task, index) => (
          <div
            key={task.id}
            className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors animate-slideIn"
            style={{ animationDelay: `${(index + 4) * 80}ms` }}
          >
            <span className="text-base">{getPriorityIcon(task.priority)}</span>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                {task.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {task.category} · {getRelativeTime(task.createdAt)}
              </p>
            </div>

            <span className={`badge ${getStatusColor(task.status)}`}>
              {getStatusLabel(task.status)}
            </span>
          </div>
        ))}
      </div>

      {recentTasks.length === 0 && (
        <p className="text-center text-sm text-gray-400 dark:text-gray-500 py-8">
          Nenhuma tarefa encontrada
        </p>
      )}
    </div>
  )
}
