import { Bell, Search, Settings } from 'lucide-react'
import { useLocation } from 'react-router-dom'

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
    <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:px-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500">Operations</p>
          <h1 className="mt-1 text-2xl font-semibold text-slate-950">{pageTitle}</h1>
        </div>

        <div className="flex items-center gap-2">
          <label className="hidden h-10 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-500 md:flex">
            <Search size={16} aria-hidden="true" />
            <input
              className="w-52 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
              placeholder="Search"
              type="search"
            />
          </label>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-950"
            type="button"
            aria-label="Notifications"
          >
            <Bell size={18} aria-hidden="true" />
          </button>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 hover:text-slate-950"
            type="button"
            aria-label="Settings"
          >
            <Settings size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
