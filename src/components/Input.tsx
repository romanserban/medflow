import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
}

const fieldClassName = 'block'
const labelClassName = 'text-sm font-medium text-slate-700'
const inputClassName =
  'mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-clinical-600 focus:ring-4 focus:ring-clinical-100'

export function Input({ className, label, ...props }: InputProps) {
  return (
    <label className={fieldClassName}>
      <span className={labelClassName}>{label}</span>
      <input className={cn(inputClassName, className)} {...props} />
    </label>
  )
}
