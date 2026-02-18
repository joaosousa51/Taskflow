export const formatDate = (dateString) => {
  if (!dateString) return '—'
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
}

export const formatDateTime = (dateString) => {
  if (!dateString) return '—'
  const date = new Date(dateString)
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export const getRelativeTime = (dateString) => {
  const now = new Date()
  const date = new Date(dateString)
  const diffMs = now - date
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'agora mesmo'
  if (diffMins < 60) return `${diffMins}min atrás`
  if (diffHours < 24) return `${diffHours}h atrás`
  if (diffDays < 7) return `${diffDays}d atrás`
  return formatDate(dateString)
}

export const getStatusColor = (status) => {
  const colors = {
    pendente: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400',
    em_progresso: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    concluida: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  }
  return colors[status] || colors.pendente
}

export const getStatusLabel = (status) => {
  const labels = {
    pendente: 'Pendente',
    em_progresso: 'Em Progresso',
    concluida: 'Concluída',
  }
  return labels[status] || status
}

export const getPriorityColor = (priority) => {
  const colors = {
    alta: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400',
    media: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400',
    baixa: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  }
  return colors[priority] || colors.baixa
}

export const getPriorityLabel = (priority) => {
  const labels = {
    alta: 'Alta',
    media: 'Média',
    baixa: 'Baixa',
  }
  return labels[priority] || priority
}

export const getPriorityIcon = (priority) => {
  const icons = {
    alta: '🔴',
    media: '🟡',
    baixa: '🟢',
  }
  return icons[priority] || '⚪'
}

export const generateId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2)
}

export const isOverdue = (dueDate, status) => {
  if (status === 'concluida' || !dueDate) return false
  return new Date(dueDate) < new Date()
}
