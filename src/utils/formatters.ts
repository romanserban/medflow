import type { TrendDirection } from '../types/dashboard'

export const getTrendClassName = (direction: TrendDirection) => {
  if (direction === 'up') {
    return 'bg-emerald-50 text-emerald-700'
  }

  if (direction === 'down') {
    return 'bg-rose-50 text-rose-700'
  }

  return 'bg-slate-100 text-slate-600'
}
