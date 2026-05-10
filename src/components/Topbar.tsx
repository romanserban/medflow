import { Bell, Search, Settings } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { Button } from './Button'
import { Input } from './Input'

const topbarClassName =
  'sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:px-8'
const topbarContentClassName = 'flex items-center justify-between gap-4'
const sectionLabelClassName = 'text-sm font-medium text-slate-500'
const pageTitleClassName = 'mt-1 text-2xl font-semibold text-slate-950'
const actionsClassName = 'flex items-center gap-2'
const searchClassName = 'hidden md:block'
const searchInputClassName = 'h-10 w-56'
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
          <Input
            className={searchInputClassName}
            label="Search"
            labelHidden
            leadingIcon={<Search size={16} aria-hidden="true" />}
            placeholder="Search"
            type="search"
            wrapperClassName={searchClassName}
          />
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
