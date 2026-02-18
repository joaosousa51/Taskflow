import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { categories } from '../../utils/mockData'

export default function TaskForm({ isOpen, onClose, onSubmit, editTask }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'media',
    category: 'Frontend',
    dueDate: '',
    status: 'pendente',
  })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (editTask) {
      setFormData({
        title: editTask.title,
        description: editTask.description,
        priority: editTask.priority,
        category: editTask.category,
        dueDate: editTask.dueDate || '',
        status: editTask.status,
      })
    } else {
      setFormData({
        title: '',
        description: '',
        priority: 'media',
        category: 'Frontend',
        dueDate: '',
        status: 'pendente',
      })
    }
    setErrors({})
  }, [editTask, isOpen])

  const validate = () => {
    const newErrors = {}
    if (!formData.title.trim()) {
      newErrors.title = 'O título é obrigatório'
    }
    if (formData.title.trim().length < 3) {
      newErrors.title = 'O título deve ter pelo menos 3 caracteres'
    }
    if (!formData.description.trim()) {
      newErrors.description = 'A descrição é obrigatória'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    onSubmit(formData)
    onClose()
  }

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800 animate-fadeIn">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {editTask ? 'Editar Tarefa' : 'Nova Tarefa'}
          </h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X size={18} className="text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <div className="px-6 py-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Título */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Título *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => handleChange('title', e.target.value)}
              placeholder="Ex: Implementar autenticação JWT"
              className={`input-field ${errors.title ? 'border-red-400 focus:ring-red-500/50' : ''}`}
            />
            {errors.title && (
              <p className="text-xs text-red-500 mt-1">{errors.title}</p>
            )}
          </div>

          {/* Descrição */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Descrição *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Descreva os detalhes da tarefa..."
              rows={3}
              className={`input-field resize-none ${errors.description ? 'border-red-400 focus:ring-red-500/50' : ''}`}
            />
            {errors.description && (
              <p className="text-xs text-red-500 mt-1">{errors.description}</p>
            )}
          </div>

          {/* Grid: Prioridade + Categoria */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Prioridade
              </label>
              <select
                value={formData.priority}
                onChange={(e) => handleChange('priority', e.target.value)}
                className="input-field cursor-pointer"
              >
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Categoria
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleChange('category', e.target.value)}
                className="input-field cursor-pointer"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid: Data + Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Prazo
              </label>
              <input
                type="date"
                value={formData.dueDate}
                onChange={(e) => handleChange('dueDate', e.target.value)}
                className="input-field cursor-pointer"
              />
            </div>

            {editTask && (
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  className="input-field cursor-pointer"
                >
                  <option value="pendente">Pendente</option>
                  <option value="em_progresso">Em Progresso</option>
                  <option value="concluida">Concluída</option>
                </select>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-gray-200 dark:border-gray-800">
          <button onClick={onClose} className="btn-secondary text-sm">
            Cancelar
          </button>
          <button onClick={handleSubmit} className="btn-primary text-sm">
            {editTask ? 'Salvar alterações' : 'Criar tarefa'}
          </button>
        </div>
      </div>
    </div>
  )
}
