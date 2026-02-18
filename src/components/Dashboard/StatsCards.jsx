import { CheckCircle, Clock, Loader, AlertTriangle, TrendingUp, ListTodo } from 'lucide-react'

export default function StatsCards({ stats }) {
  const cards = [
    {
      label: 'Total de Tarefas',
      value: stats.total,
      icon: ListTodo,
      color: 'text-brand-600 dark:text-brand-400',
      bg: 'bg-brand-50 dark:bg-brand-950',
    },
    {
      label: 'Concluídas',
      value: stats.concluidas,
      icon: CheckCircle,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-950',
      subtitle: `${stats.taxaConclusao}% do total`,
    },
    {
      label: 'Em Progresso',
      value: stats.emProgresso,
      icon: Loader,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-950',
    },
    {
      label: 'Pendentes',
      value: stats.pendentes,
      icon: Clock,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-950',
    },
    {
      label: 'Alta Prioridade',
      value: stats.altaPrioridade,
      icon: AlertTriangle,
      color: 'text-red-600 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-950',
    },
    {
      label: 'Taxa de Conclusão',
      value: `${stats.taxaConclusao}%`,
      icon: TrendingUp,
      color: 'text-violet-600 dark:text-violet-400',
      bg: 'bg-violet-50 dark:bg-violet-950',
    },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <div
          key={card.label}
          className="card p-4 animate-fadeIn"
          style={{ animationDelay: `${index * 60}ms` }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2 rounded-xl ${card.bg}`}>
              <card.icon size={18} className={card.color} />
            </div>
          </div>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">
            {card.value}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {card.label}
          </p>
          {card.subtitle && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 font-medium">
              {card.subtitle}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
