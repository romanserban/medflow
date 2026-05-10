import {
  BarChart3,
  CalendarCheck,
  HeartPulse,
  LayoutDashboard,
  Settings,
  UsersRound,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const sidebarClassName =
  'fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white px-5 py-6 lg:block'
const brandClassName = 'flex items-center gap-3'
const brandIconClassName =
  'flex h-10 w-10 items-center justify-center rounded-lg bg-clinical-600 text-white'
const brandTitleClassName = 'text-lg font-semibold leading-none'
const brandSubtitleClassName = 'mt-1 text-sm text-slate-500'
const navClassName = 'mt-10 space-y-1'
const navItemClassName =
  'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition'
const activeNavItemClassName = 'bg-clinical-50 text-clinical-700'
const inactiveNavItemClassName = 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'

const navigationItems = [
  { label: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { label: 'Appointments', to: '/appointments', icon: CalendarCheck },
  { label: 'Patients', to: '/patients', icon: UsersRound },
  { label: 'Analytics', to: '/analytics', icon: BarChart3 },
  { label: 'Settings', to: '/settings', icon: Settings },
]

export function Sidebar() {
  return (
    <aside className={sidebarClassName}>
      <div className={brandClassName}>
        <div className={brandIconClassName}>
          <HeartPulse size={22} aria-hidden="true" />
        </div>
        <div>
          <p className={brandTitleClassName}>MedFlow</p>
          <p className={brandSubtitleClassName}>Hospital dashboard</p>
        </div>
      </div>

      <nav className={navClassName} aria-label="Main navigation">
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${navItemClassName} ${
                  isActive ? activeNavItemClassName : inactiveNavItemClassName
                }`
              }
            >
              <Icon size={18} aria-hidden="true" />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}
