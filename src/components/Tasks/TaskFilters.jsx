import { Search, SlidersHorizontal, X } from 'lucide-react'
import { categories } from '../../utils/mockData'

export default function TaskFilters({
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
}) {
  return (
    <div className="card p-4 space-y-3 animate-fadeIn">
      {/* Barra de busca */}
      <div className="relative">
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar tarefas..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-10"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X size={16} />
          </button>
        )}
      </div>

      {/* Filtros */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
          <SlidersHorizontal size={14} />
          <span>Filtros:</span>
        </div>

        {/* Status */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500/50 cursor-pointer"
        >
          <option value="todas">Todos os status</option>
          <option value="pendente">Pendente</option>
          <option value="em_progresso">Em Progresso</option>
          <option value="concluida">Concluída</option>
        </select>

        {/* Prioridade */}
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500/50 cursor-pointer"
        >
          <option value="todas">Todas prioridades</option>
          <option value="alta">Alta</option>
          <option value="media">Média</option>
          <option value="baixa">Baixa</option>
        </select>

        {/* Categoria */}
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500/50 cursor-pointer"
        >
          <option value="todas">Todas categorias</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        {/* Ordenação */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 border-0 text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-brand-500/50 cursor-pointer"
        >
          <option value="createdAt">Mais recentes</option>
          <option value="dueDate">Prazo</option>
          <option value="priority">Prioridade</option>
        </select>

        {/* Limpar filtros */}
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs px-3 py-1.5 rounded-lg bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>
    </div>
  )
}
