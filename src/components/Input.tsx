import type { InputHTMLAttributes, ReactNode } from 'react'
import { useId } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label?: string
  labelHidden?: boolean
  leadingIcon?: ReactNode
  wrapperClassName?: string
}

const fieldClassName = 'block'
const labelClassName = 'text-sm font-medium text-slate-700'
const hiddenLabelClassName = 'sr-only'
const inputWrapClassName = 'relative mt-2'
const inputWrapWithoutLabelClassName = 'relative'
const iconClassName = 'pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-500'
const inputClassName =
  'mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-clinical-600 focus:ring-4 focus:ring-clinical-100'
const inputWithIconClassName = 'pl-9'
const inputNoTopMarginClassName = 'mt-0'
const inputErrorClassName = 'border-rose-300 focus:border-rose-500 focus:ring-rose-100'
const inputDisabledClassName = 'cursor-not-allowed bg-slate-50 text-slate-500'
const errorClassName = 'mt-2 text-sm text-rose-600'

export function Input({
  className = '',
  disabled,
  error,
  id,
  label,
  labelHidden = false,
  leadingIcon,
  wrapperClassName = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const errorId = error ? `${inputId}-error` : undefined
  const labelStyle = labelHidden ? hiddenLabelClassName : labelClassName
  const hasVisibleLabel = label && !labelHidden
  const inputWrapStyle = hasVisibleLabel ? inputWrapClassName : inputWrapWithoutLabelClassName
  const topMarginStyle = hasVisibleLabel ? '' : inputNoTopMarginClassName
  const iconStyle = leadingIcon ? inputWithIconClassName : ''
  const errorStyle = error ? inputErrorClassName : ''
  const disabledStyle = disabled ? inputDisabledClassName : ''

  return (
    <div className={`${fieldClassName} ${wrapperClassName}`}>
      {label && (
        <label className={labelStyle} htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={inputWrapStyle}>
        {leadingIcon && <span className={iconClassName}>{leadingIcon}</span>}
        <input
          aria-describedby={errorId}
          aria-invalid={Boolean(error)}
          className={`${inputClassName} ${topMarginStyle} ${iconStyle} ${errorStyle} ${disabledStyle} ${className}`}
          disabled={disabled}
          id={inputId}
          {...props}
        />
      </div>
      {error && (
        <p className={errorClassName} id={errorId}>
          {error}
        </p>
      )}
    </div>
  )
}
