import type { LucideIcon } from 'lucide-react'

export type TrendDirection = 'up' | 'down' | 'neutral'

export interface MetricCard {
  id: string
  label: string
  value: string
  helperText: string
  trend: {
    value: string
    direction: TrendDirection
  }
  icon: LucideIcon
}

export interface AdmissionsPoint {
  day: string
  admitted: number
  discharged: number
}
