import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { admissionsOverview, overviewMetrics } from '../data/dashboard'
import { getTrendClassName } from '../utils/formatters'

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {overviewMetrics.map((metric) => {
          const Icon = metric.icon

          return (
            <article
              key={metric.id}
              className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">{metric.label}</p>
                  <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">
                    {metric.value}
                  </p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-50 text-clinical-700">
                  <Icon size={22} aria-hidden="true" />
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between gap-3">
                <p className="text-sm text-slate-500">{metric.helperText}</p>
                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getTrendClassName(
                    metric.trend.direction,
                  )}`}
                >
                  {metric.trend.value}
                </span>
              </div>
            </article>
          )
        })}
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-5 shadow-panel">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">Admissions Flow</h2>
            <p className="mt-1 text-sm text-slate-500">
              Weekly admitted and discharged patient volume
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-clinical-600" />
              Admitted
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
              Discharged
            </span>
          </div>
        </div>

        <div className="mt-6 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={admissionsOverview} margin={{ left: -20, right: 8 }}>
              <defs>
                <linearGradient id="admittedGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.28} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0.02} />
                </linearGradient>
                <linearGradient id="dischargedGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.22} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.02} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#e2e8f0" strokeDasharray="3 3" vertical={false} />
              <XAxis axisLine={false} dataKey="day" tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Tooltip />
              <Area
                dataKey="admitted"
                fill="url(#admittedGradient)"
                name="Admitted"
                stroke="#2563eb"
                strokeWidth={2}
                type="monotone"
              />
              <Area
                dataKey="discharged"
                fill="url(#dischargedGradient)"
                name="Discharged"
                stroke="#10b981"
                strokeWidth={2}
                type="monotone"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  )
}
