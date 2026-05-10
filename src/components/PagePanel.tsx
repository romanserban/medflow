import type { ReactNode } from 'react'
import { Card } from './Card'

interface PagePanelProps {
  children: ReactNode
  eyebrow: string
  title: string
}

const panelClassName = 'p-8'
const eyebrowClassName = 'text-sm font-medium text-slate-500'
const titleClassName = 'mt-2 text-2xl font-semibold text-slate-950'
const bodyClassName = 'mt-3 max-w-2xl text-sm leading-6 text-slate-500'

export function PagePanel({ children, eyebrow, title }: PagePanelProps) {
  return (
    <Card className={panelClassName}>
      <p className={eyebrowClassName}>{eyebrow}</p>
      <h2 className={titleClassName}>{title}</h2>
      <div className={bodyClassName}>{children}</div>
    </Card>
  )
}
