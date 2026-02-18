import TaskCard from './TaskCard'
import { ClipboardList } from 'lucide-react'

export default function TaskList({ tasks, onUpdate, onDelete, onEdit }) {
  if (tasks.length === 0) {
    return (
      <div className="card flex flex-col items-center justify-center py-16 animate-fadeIn">
        <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-4">
          <ClipboardList size={28} className="text-gray-400" />
        </div>
        <p className="text-gray-500 dark:text-gray-400 font-medium">
          Nenhuma tarefa encontrada
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          Tente ajustar os filtros ou crie uma nova tarefa
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {tasks.map((task, index) => (
        <div
          key={task.id}
          className="animate-fadeIn"
          style={{ animationDelay: `${index * 40}ms` }}
        >
          <TaskCard
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </div>
      ))}
    </div>
  )
}
