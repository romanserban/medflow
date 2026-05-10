import type { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

const baseClassName =
  'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:opacity-50'

const variantClassNames: Record<ButtonVariant, string> = {
  primary: 'bg-clinical-600 text-white hover:bg-clinical-700 focus:ring-clinical-100',
  secondary:
    'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 hover:text-slate-950 focus:ring-slate-100',
  ghost: 'text-slate-600 hover:bg-slate-100 hover:text-slate-950 focus:ring-slate-100',
  danger: 'bg-rose-600 text-white hover:bg-rose-700 focus:ring-rose-100',
}

const sizeClassNames: Record<ButtonSize, string> = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-10 px-4 text-sm',
  lg: 'h-11 px-5 text-sm',
}

export function Button({
  children,
  className = '',
  disabled,
  size = 'md',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClassName} ${variantClassNames[variant]} ${sizeClassNames[size]} ${className}`}
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
