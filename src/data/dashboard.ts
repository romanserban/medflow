import { Activity, BedDouble, CalendarCheck, UsersRound } from 'lucide-react'
import type { AdmissionsPoint, MetricCard } from '../types/dashboard'

export const overviewMetrics: MetricCard[] = [
  {
    id: 'patients',
    label: 'Active Patients',
    value: '1,248',
    helperText: 'Across all care units',
    trend: { value: '+8.4%', direction: 'up' },
    icon: UsersRound,
  },
  {
    id: 'occupancy',
    label: 'Bed Occupancy',
    value: '82%',
    helperText: '312 of 381 beds in use',
    trend: { value: '+3.1%', direction: 'up' },
    icon: BedDouble,
  },
  {
    id: 'appointments',
    label: 'Appointments',
    value: '436',
    helperText: 'Scheduled for today',
    trend: { value: '-2.2%', direction: 'down' },
    icon: CalendarCheck,
  },
  {
    id: 'response',
    label: 'Avg. Response',
    value: '7m',
    helperText: 'Emergency triage time',
    trend: { value: 'Stable', direction: 'neutral' },
    icon: Activity,
  },
]

export const admissionsOverview: AdmissionsPoint[] = [
  { day: 'Mon', admitted: 42, discharged: 31 },
  { day: 'Tue', admitted: 47, discharged: 36 },
  { day: 'Wed', admitted: 39, discharged: 34 },
  { day: 'Thu', admitted: 56, discharged: 41 },
  { day: 'Fri', admitted: 61, discharged: 44 },
  { day: 'Sat', admitted: 45, discharged: 38 },
  { day: 'Sun', admitted: 37, discharged: 33 },
]
