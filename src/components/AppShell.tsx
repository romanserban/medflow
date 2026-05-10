import { Bell, HeartPulse, Search, Settings } from 'lucide-react'
import { NavLink, Outlet } from 'react-router-dom'

const navigationItems = [
  { label: 'Overview', to: '/' },
  { label: 'Patients', to: '/patients' },
  { label: 'Appointments', to: '/appointments' },
]

export function AppShell() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-5 py-6 lg:block">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-600 text-white">
            <HeartPulse size={22} aria-hidden="true" />
          </div>
          <div>
            <p className="text-lg font-semibold leading-none">MedFlow</p>
            <p className="mt-1 text-sm text-slate-500">Hospital dashboard</p>
          </div>
        </div>

        <nav className="mt-10 space-y-1">
          {navigationItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                [
                  'block rounded-md px-3 py-2 text-sm font-medium transition',
                  isActive
                    ? 'bg-clinical-50 text-clinical-700'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950',
                ].join(' ')
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:px-8">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-500">Operations</p>
              <h1 className="mt-1 text-2xl font-semibold text-slate-950">Hospital Overview</h1>
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

        <main className="px-4 py-6 md:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
