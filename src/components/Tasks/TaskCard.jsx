import { useState } from 'react'
import { Trash2, Edit3, ChevronDown, ChevronUp, Calendar, Tag } from 'lucide-react'
import {
  getStatusColor,
  getStatusLabel,
  getPriorityColor,
  getPriorityLabel,
  formatDate,
  isOverdue,
} from '../../utils/helpers'

export default function TaskCard({ task, onUpdate, onDelete, onEdit }) {
  const [expanded, setExpanded] = useState(false)
  const overdue = isOverdue(task.dueDate, task.status)

  const handleStatusChange = (newStatus) => {
    onUpdate(task.id, { status: newStatus })
  }

  return (
    <div
      className={`card p-4 transition-all duration-200 hover:shadow-md ${
        overdue ? 'border-red-300 dark:border-red-800' : ''
      }`}
    >
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <button
          onClick={() =>
            handleStatusChange(task.status === 'concluida' ? 'pendente' : 'concluida')
          }
          className={`mt-0.5 w-5 h-5 rounded-md border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
            task.status === 'concluida'
              ? 'bg-emerald-500 border-emerald-500'
              : 'border-gray-300 dark:border-gray-600 hover:border-brand-500'
          }`}
        >
          {task.status === 'concluida' && (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4
              className={`text-sm font-medium ${
                task.status === 'concluida'
                  ? 'line-through text-gray-400 dark:text-gray-500'
                  : 'text-gray-900 dark:text-white'
              }`}
            >
              {task.title}
            </h4>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button
                onClick={() => onEdit(task)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-brand-600 hover:bg-brand-50 dark:hover:bg-brand-950 transition-colors"
                title="Editar"
              >
                <Edit3 size={14} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
                title="Excluir"
              >
                <Trash2 size={14} />
              </button>
              <button
                onClick={() => setExpanded(!expanded)}
                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 mt-2">
            <span className={`badge ${getStatusColor(task.status)}`}>
              {getStatusLabel(task.status)}
            </span>
            <span className={`badge ${getPriorityColor(task.priority)}`}>
              {getPriorityLabel(task.priority)}
            </span>
            <span className="badge bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400">
              <Tag size={10} className="mr-1" />
              {task.category}
            </span>
            {task.dueDate && (
              <span
                className={`badge ${
                  overdue
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                }`}
              >
                <Calendar size={10} className="mr-1" />
                {formatDate(task.dueDate)}
                {overdue && ' (atrasada)'}
              </span>
            )}
          </div>

          {/* Expanded description */}
          {expanded && (
            <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 animate-fadeIn">
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {task.description}
              </p>

              {/* Status change buttons */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-xs text-gray-500 dark:text-gray-400 mr-1">
                  Mover para:
                </span>
                {['pendente', 'em_progresso', 'concluida'].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleStatusChange(status)}
                    disabled={task.status === status}
                    className={`text-xs px-2.5 py-1 rounded-lg transition-colors ${
                      task.status === status
                        ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {getStatusLabel(status)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
