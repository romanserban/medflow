import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Card } from '../components/Card'
import { admissionsOverview, overviewMetrics } from '../data/dashboard'
import { getTrendClassName } from '../utils/formatters'

const pageStackClassName = 'space-y-6'
const metricsGridClassName = 'grid gap-4 sm:grid-cols-2 xl:grid-cols-4'
const metricHeaderClassName = 'flex items-start justify-between gap-4'
const metricLabelClassName = 'text-sm font-medium text-slate-500'
const metricValueClassName = 'mt-3 text-3xl font-semibold tracking-tight text-slate-950'
const metricIconClassName =
  'flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-50 text-clinical-700'
const metricFooterClassName = 'mt-5 flex items-center justify-between gap-3'
const metricHelperClassName = 'text-sm text-slate-500'
const trendBadgeClassName = 'rounded-full px-2.5 py-1 text-xs font-semibold'
const chartDescription = 'Weekly admitted and discharged patient volume'
const legendClassName = 'mb-5 flex items-center gap-4 text-sm text-slate-500'
const legendItemClassName = 'flex items-center gap-2'
const admittedLegendClassName = 'h-2.5 w-2.5 rounded-full bg-clinical-600'
const dischargedLegendClassName = 'h-2.5 w-2.5 rounded-full bg-emerald-500'
const chartFrameClassName = 'mt-6 h-80'

export function DashboardPage() {
  return (
    <div className={pageStackClassName}>
      <section className={metricsGridClassName}>
        {overviewMetrics.map((metric) => {
          const Icon = metric.icon

          return (
            <Card key={metric.id}>
              <div className={metricHeaderClassName}>
                <div>
                  <p className={metricLabelClassName}>{metric.label}</p>
                  <p className={metricValueClassName}>{metric.value}</p>
                </div>
                <div className={metricIconClassName}>
                  <Icon size={22} aria-hidden="true" />
                </div>
              </div>

              <div className={metricFooterClassName}>
                <p className={metricHelperClassName}>{metric.helperText}</p>
                <span
                  className={`${trendBadgeClassName} ${getTrendClassName(
                    metric.trend.direction,
                  )}`}
                >
                  {metric.trend.value}
                </span>
              </div>
            </Card>
          )
        })}
      </section>

      <Card title="Admissions Flow" description={chartDescription}>
        <div className={legendClassName}>
          <span className={legendItemClassName}>
            <span className={admittedLegendClassName} />
            Admitted
          </span>
          <span className={legendItemClassName}>
            <span className={dischargedLegendClassName} />
            Discharged
          </span>
        </div>

        <div className={chartFrameClassName}>
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
      </Card>
    </div>
  )
}
