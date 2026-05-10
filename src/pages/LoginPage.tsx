import { HeartPulse } from 'lucide-react'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'

const loginPageClassName =
  'flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10 text-slate-950'
const loginCardClassName = 'w-full max-w-md p-8'
const brandClassName = 'flex items-center gap-3'
const brandIconClassName =
  'flex h-11 w-11 items-center justify-center rounded-lg bg-clinical-600 text-white'
const titleClassName = 'text-2xl font-semibold'
const subtitleClassName = 'mt-1 text-sm text-slate-500'
const formClassName = 'mt-8 space-y-5'

export function LoginPage() {
  return (
    <main className={loginPageClassName}>
      <Card className={loginCardClassName}>
        <div className={brandClassName}>
          <div className={brandIconClassName}>
            <HeartPulse size={24} aria-hidden="true" />
          </div>
          <div>
            <h1 className={titleClassName}>MedFlow</h1>
            <p className={subtitleClassName}>Sign in to continue</p>
          </div>
        </div>

        <form className={formClassName}>
          <Input label="Email" type="email" placeholder="name@hospital.org" />
          <Input label="Password" type="password" placeholder="Enter your password" />

          <Button className="w-full" size="lg">
            Sign In
          </Button>
        </form>
      </Card>
    </main>
  )
}
