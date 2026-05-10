import type { HTMLAttributes, ReactNode } from 'react'

interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  children?: ReactNode
  description?: ReactNode
  title?: ReactNode
}

const cardClassName = 'rounded-lg border border-slate-200 bg-white p-5 shadow-panel'
const headerClassName = 'mb-5'
const titleClassName = 'text-lg font-semibold text-slate-950'
const descriptionClassName = 'mt-1 text-sm text-slate-500'

export function Card({ children, className = '', description, title, ...props }: CardProps) {
  const hasHeader = title || description

  return (
    <div className={`${cardClassName} ${className}`} {...props}>
      {hasHeader && (
        <div className={headerClassName}>
          {title && <h2 className={titleClassName}>{title}</h2>}
          {description && <p className={descriptionClassName}>{description}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
