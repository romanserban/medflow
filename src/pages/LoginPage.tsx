import { HeartPulse } from 'lucide-react'

export function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-950">
      <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-panel">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-600 text-white">
            <HeartPulse size={24} aria-hidden="true" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold">MedFlow</h1>
            <p className="mt-1 text-sm text-slate-500">Sign in to continue</p>
          </div>
        </div>

        <form className="mt-8 space-y-5">
          <label className="block">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-clinical-600 focus:ring-4 focus:ring-clinical-100"
              type="email"
              placeholder="name@hospital.org"
            />
          </label>

          <label className="block">
            <span className="text-sm font-medium text-slate-700">Password</span>
            <input
              className="mt-2 h-11 w-full rounded-md border border-slate-200 px-3 text-sm outline-none transition focus:border-clinical-600 focus:ring-4 focus:ring-clinical-100"
              type="password"
              placeholder="Enter your password"
            />
          </label>

          <button
            className="h-11 w-full rounded-md bg-clinical-600 text-sm font-semibold text-white transition hover:bg-clinical-700"
            type="button"
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  )
}
