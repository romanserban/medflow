import { Link } from 'react-router-dom'
import { Card } from '../components/Card'

const pageClassName =
  'flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-950'
const panelClassName = 'w-full max-w-lg p-8 text-center'
const statusClassName = 'text-sm font-semibold text-clinical-700'
const titleClassName = 'mt-2 text-2xl font-semibold'
const bodyClassName = 'mt-3 text-sm leading-6 text-slate-500'
const dashboardLinkClassName =
  'mt-6 inline-flex h-10 items-center justify-center rounded-md bg-clinical-600 px-4 text-sm font-semibold text-white transition hover:bg-clinical-700'

export function NotFoundPage() {
  return (
    <main className={pageClassName}>
      <Card className={panelClassName}>
        <p className={statusClassName}>404</p>
        <h1 className={titleClassName}>Page not found</h1>
        <p className={bodyClassName}>
          The page you requested does not exist in MedFlow.
        </p>
        <Link className={dashboardLinkClassName} to="/dashboard">
          Go to dashboard
        </Link>
      </Card>
    </main>
  )
}
