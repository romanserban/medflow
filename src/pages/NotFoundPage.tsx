import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-950">
      <section className="w-full max-w-lg rounded-lg border border-slate-200 bg-white p-8 text-center shadow-panel">
        <p className="text-sm font-semibold text-clinical-700">404</p>
        <h1 className="mt-2 text-2xl font-semibold">Page not found</h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          The page you requested does not exist in MedFlow.
        </p>
        <Link
          className="mt-6 inline-flex h-10 items-center justify-center rounded-md bg-clinical-600 px-4 text-sm font-semibold text-white transition hover:bg-clinical-700"
          to="/dashboard"
        >
          Go to dashboard
        </Link>
      </section>
    </main>
  )
}
