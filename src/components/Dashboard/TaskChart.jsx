import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts'
import { weeklyData } from '../../utils/mockData'

const COLORS = ['#f59e0b', '#3b82f6', '#10b981']

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload) return null
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-2 shadow-lg">
      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">{label}</p>
      {payload.map((entry, index) => (
        <p key={index} className="text-xs" style={{ color: entry.color }}>
          {entry.name}: {entry.value}
        </p>
      ))}
    </div>
  )
}

export default function TaskChart({ stats }) {
  const [chartType, setChartType] = useState('bar')

  const pieData = [
    { name: 'Pendentes', value: stats.pendentes },
    { name: 'Em Progresso', value: stats.emProgresso },
    { name: 'Concluídas', value: stats.concluidas },
  ]

  return (
    <div className="card p-5 animate-fadeIn" style={{ animationDelay: '200ms' }}>
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          {chartType === 'bar' ? 'Atividade Semanal' : 'Distribuição por Status'}
        </h3>
        <div className="flex bg-gray-100 dark:bg-gray-800 rounded-lg p-0.5">
          <button
            onClick={() => setChartType('bar')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
              chartType === 'bar'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            Barras
          </button>
          <button
            onClick={() => setChartType('pie')}
            className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
              chartType === 'pie'
                ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            Pizza
          </button>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === 'bar' ? (
            <BarChart data={weeklyData} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: '#9ca3af' }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="concluidas" name="Concluídas" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="criadas" name="Criadas" fill="#6366f1" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : (
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend
                formatter={(value) => (
                  <span className="text-xs text-gray-600 dark:text-gray-400">{value}</span>
                )}
              />
            </PieChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
