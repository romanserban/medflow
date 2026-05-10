import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Topbar } from './Topbar'

const appLayoutClassName = 'min-h-screen bg-slate-100 text-slate-950'
const contentShellClassName = 'lg:pl-64'
const mainContentClassName = 'px-4 py-6 md:px-8'

export function AppLayout() {
  return (
    <div className={appLayoutClassName}>
      <Sidebar />

      <div className={contentShellClassName}>
        <Topbar />
        <main className={mainContentClassName}>
          <Outlet />
        </main>
      </div>
    </div>
  )
}
