import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../utils/cn'

interface CardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

const cardClassName = 'rounded-lg border border-slate-200 bg-white shadow-panel'

export function Card({ children, className, ...props }: CardProps) {
  return (
    <section className={cn(cardClassName, className)} {...props}>
      {children}
    </section>
  )
}
