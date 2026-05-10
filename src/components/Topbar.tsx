import { Bell, Search, Settings } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'

const topbarClassName =
  'sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:px-8'
const topbarContentClassName = 'flex items-center justify-between gap-4'
const sectionLabelClassName = 'text-sm font-medium text-slate-500'
const pageTitleClassName = 'mt-1 text-2xl font-semibold text-slate-950'
const actionsClassName = 'flex items-center gap-2'
const searchBoxClassName =
  'hidden h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-500 md:flex'
const searchInputClassName =
  'w-52 bg-transparent text-slate-900 outline-none placeholder:text-slate-400'
const iconButtonClassName = 'w-10 px-0'

const pageTitles: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/appointments': 'Appointments',
  '/patients': 'Patients',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
}

export function Topbar() {
  const { pathname } = useLocation()
  const pageTitle = pageTitles[pathname] ?? 'MedFlow'

  return (
    <header className={topbarClassName}>
      <div className={topbarContentClassName}>
        <div>
          <p className={sectionLabelClassName}>Operations</p>
          <h1 className={pageTitleClassName}>{pageTitle}</h1>
        </div>

        <div className={actionsClassName}>
          <label className={searchBoxClassName}>
            <Search size={16} aria-hidden="true" />
            <input className={searchInputClassName} placeholder="Search" type="search" />
          </label>
          <Button
            className={iconButtonClassName}
            variant="secondary"
            size="md"
            aria-label="Notifications"
          >
            <Bell size={18} aria-hidden="true" />
          </Button>
          <Button
            className={iconButtonClassName}
            variant="secondary"
            size="md"
            aria-label="Settings"
          >
            <Settings size={18} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </header>
  )
}
