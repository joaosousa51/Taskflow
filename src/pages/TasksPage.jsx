import { useState } from 'react'
import { Plus } from 'lucide-react'
import Layout from '../components/Layout/Layout'
import TaskFilters from '../components/Tasks/TaskFilters'
import TaskList from '../components/Tasks/TaskList'
import TaskForm from '../components/Tasks/TaskForm'
import { useTaskContext } from '../contexts/TaskContext'
import { useTasks } from '../hooks/useTasks'

export default function TasksPage() {
  const { tasks, addTask, updateTask, deleteTask } = useTaskContext()
  const taskUtils = useTasks(tasks)
  const [formOpen, setFormOpen] = useState(false)
  const [editTask, setEditTask] = useState(null)

  const handleCreate = (data) => {
    addTask(data)
  }

  const handleEdit = (task) => {
    setEditTask(task)
    setFormOpen(true)
  }

  const handleSubmit = (data) => {
    if (editTask) {
      updateTask(editTask.id, data)
      setEditTask(null)
    } else {
      handleCreate(data)
    }
  }

  const handleClose = () => {
    setFormOpen(false)
    setEditTask(null)
  }

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      deleteTask(id)
    }
  }

  return (
    <Layout title="Tarefas">
      <div className="space-y-4 max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between animate-fadeIn">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Minhas Tarefas
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {taskUtils.filteredTasks.length} de {tasks.length} tarefas
            </p>
          </div>
          <button
            onClick={() => setFormOpen(true)}
            className="btn-primary flex items-center gap-2 text-sm"
          >
            <Plus size={18} />
            Nova Tarefa
          </button>
        </div>

        {/* Filters */}
        <TaskFilters {...taskUtils} />

        {/* Task List */}
        <TaskList
          tasks={taskUtils.filteredTasks}
          onUpdate={updateTask}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />

        {/* Task Form Modal */}
        <TaskForm
          isOpen={formOpen}
          onClose={handleClose}
          onSubmit={handleSubmit}
          editTask={editTask}
        />
      </div>
    </Layout>
  )
}
