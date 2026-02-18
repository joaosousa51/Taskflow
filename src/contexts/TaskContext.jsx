import { createContext, useContext, useCallback } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { mockTasks } from '../utils/mockData'
import { generateId } from '../utils/helpers'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('taskflow-tasks', mockTasks)

  const addTask = useCallback((taskData) => {
    const newTask = {
      id: generateId(),
      ...taskData,
      status: taskData.status || 'pendente',
      createdAt: new Date().toISOString(),
      completedAt: null,
    }
    setTasks((prev) => [newTask, ...prev])
    return newTask
  }, [setTasks])

  const updateTask = useCallback((id, updates) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id !== id) return task

        const updatedTask = { ...task, ...updates }

        // Se marcou como concluída, registrar data
        if (updates.status === 'concluida' && task.status !== 'concluida') {
          updatedTask.completedAt = new Date().toISOString()
        }

        // Se voltou de concluída, limpar data
        if (updates.status && updates.status !== 'concluida') {
          updatedTask.completedAt = null
        }

        return updatedTask
      })
    )
  }, [setTasks])

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }, [setTasks])

  const getTaskById = useCallback((id) => {
    return tasks.find((task) => task.id === id)
  }, [tasks])

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, getTaskById }}>
      {children}
    </TaskContext.Provider>
  )
}

export function useTaskContext() {
  const context = useContext(TaskContext)
  if (!context) {
    throw new Error('useTaskContext deve ser usado dentro de um TaskProvider')
  }
  return context
}
