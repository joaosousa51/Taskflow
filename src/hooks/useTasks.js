import { useState, useMemo } from 'react'

export function useTasks(tasks) {
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('todas')
  const [priorityFilter, setPriorityFilter] = useState('todas')
  const [categoryFilter, setCategoryFilter] = useState('todas')
  const [sortBy, setSortBy] = useState('createdAt')

  const filteredTasks = useMemo(() => {
    let result = [...tasks]

    // Filtro de busca
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (task) =>
          task.title.toLowerCase().includes(query) ||
          task.description.toLowerCase().includes(query)
      )
    }

    // Filtro de status
    if (statusFilter !== 'todas') {
      result = result.filter((task) => task.status === statusFilter)
    }

    // Filtro de prioridade
    if (priorityFilter !== 'todas') {
      result = result.filter((task) => task.priority === priorityFilter)
    }

    // Filtro de categoria
    if (categoryFilter !== 'todas') {
      result = result.filter((task) => task.category === categoryFilter)
    }

    // Ordenação
    result.sort((a, b) => {
      if (sortBy === 'createdAt') {
        return new Date(b.createdAt) - new Date(a.createdAt)
      }
      if (sortBy === 'dueDate') {
        if (!a.dueDate) return 1
        if (!b.dueDate) return -1
        return new Date(a.dueDate) - new Date(b.dueDate)
      }
      if (sortBy === 'priority') {
        const order = { alta: 0, media: 1, baixa: 2 }
        return order[a.priority] - order[b.priority]
      }
      return 0
    })

    return result
  }, [tasks, searchQuery, statusFilter, priorityFilter, categoryFilter, sortBy])

  const stats = useMemo(() => {
    const total = tasks.length
    const pendentes = tasks.filter((t) => t.status === 'pendente').length
    const emProgresso = tasks.filter((t) => t.status === 'em_progresso').length
    const concluidas = tasks.filter((t) => t.status === 'concluida').length
    const altaPrioridade = tasks.filter((t) => t.priority === 'alta' && t.status !== 'concluida').length
    const taxaConclusao = total > 0 ? Math.round((concluidas / total) * 100) : 0

    return { total, pendentes, emProgresso, concluidas, altaPrioridade, taxaConclusao }
  }, [tasks])

  const clearFilters = () => {
    setSearchQuery('')
    setStatusFilter('todas')
    setPriorityFilter('todas')
    setCategoryFilter('todas')
    setSortBy('createdAt')
  }

  const hasActiveFilters = searchQuery || statusFilter !== 'todas' || priorityFilter !== 'todas' || categoryFilter !== 'todas'

  return {
    filteredTasks,
    stats,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    priorityFilter,
    setPriorityFilter,
    categoryFilter,
    setCategoryFilter,
    sortBy,
    setSortBy,
    clearFilters,
    hasActiveFilters,
  }
}
