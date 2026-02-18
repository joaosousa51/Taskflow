import Layout from '../components/Layout/Layout'
import StatsCards from '../components/Dashboard/StatsCards'
import TaskChart from '../components/Dashboard/TaskChart'
import RecentTasks from '../components/Dashboard/RecentTasks'
import { useTaskContext } from '../contexts/TaskContext'
import { useTasks } from '../hooks/useTasks'

export default function DashboardPage() {
  const { tasks } = useTaskContext()
  const { stats } = useTasks(tasks)

  return (
    <Layout title="Dashboard">
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Welcome */}
        <div className="animate-fadeIn">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Bom dia! 👋
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            Aqui está um resumo das suas tarefas
          </p>
        </div>

        {/* Stats */}
        <StatsCards stats={stats} />

        {/* Charts + Recent */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskChart stats={stats} />
          <RecentTasks tasks={tasks} />
        </div>
      </div>
    </Layout>
  )
}
