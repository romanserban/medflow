export type BadgeStatus =
  | 'confirmed'
  | 'pending'
  | 'completed'
  | 'cancelled'
  | 'paid'
  | 'unpaid'
  | 'insurance'
  | 'active'
  | 'follow-up-needed'
  | 'inactive'

interface BadgeProps {
  className?: string
  status: BadgeStatus
}

const badgeClassName =
  'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold'

const statusLabels: Record<BadgeStatus, string> = {
  confirmed: 'Confirmed',
  pending: 'Pending',
  completed: 'Completed',
  cancelled: 'Cancelled',
  paid: 'Paid',
  unpaid: 'Unpaid',
  insurance: 'Insurance',
  active: 'Active',
  'follow-up-needed': 'Follow-up Needed',
  inactive: 'Inactive',
}

const statusClassNames: Record<BadgeStatus, string> = {
  confirmed: 'border-blue-200 bg-blue-50 text-blue-700',
  pending: 'border-amber-200 bg-amber-50 text-amber-700',
  completed: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  cancelled: 'border-rose-200 bg-rose-50 text-rose-700',
  paid: 'border-teal-200 bg-teal-50 text-teal-700',
  unpaid: 'border-orange-200 bg-orange-50 text-orange-700',
  insurance: 'border-violet-200 bg-violet-50 text-violet-700',
  active: 'border-green-200 bg-green-50 text-green-700',
  'follow-up-needed': 'border-yellow-200 bg-yellow-50 text-yellow-800',
  inactive: 'border-slate-200 bg-slate-100 text-slate-600',
}

export function Badge({ className = '', status }: BadgeProps) {
  return (
    <span className={`${badgeClassName} ${statusClassNames[status]} ${className}`}>
      {statusLabels[status]}
    </span>
  )
}
