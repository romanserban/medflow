import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { HeartPulse, ShieldCheck } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/Button'
import { Card } from '../components/Card'
import { Input } from '../components/Input'

const demoEmail = 'demo@clinicflow.com'
const demoPassword = 'demo123'

const loginPageClassName =
  'flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8 text-slate-950 sm:py-10'
const loginCardClassName = 'w-full max-w-md p-6 sm:p-8'
const brandClassName = 'flex flex-col items-center text-center'
const brandIconClassName =
  'flex h-12 w-12 items-center justify-center rounded-lg bg-clinical-600 text-white'
const titleClassName = 'mt-4 text-2xl font-semibold'
const subtitleClassName = 'mt-2 max-w-sm text-sm leading-6 text-slate-500'
const formClassName = 'mt-8 space-y-5'
const formOptionsClassName = 'flex items-center justify-between gap-4'
const rememberLabelClassName = 'flex items-center gap-2 text-sm font-medium text-slate-700'
const checkboxClassName =
  'h-4 w-4 rounded border-slate-300 text-clinical-600 focus:ring-clinical-100'
const demoBoxClassName = 'mt-6 rounded-md border border-slate-200 bg-slate-50 p-4'
const demoHeaderClassName = 'flex items-center gap-2 text-sm font-semibold text-slate-700'
const demoTextClassName = 'mt-3 space-y-1 text-sm text-slate-600'
const demoValueClassName = 'font-medium text-slate-900'
const formErrorClassName =
  'rounded-md border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700'

interface LoginErrors {
  email?: string
  form?: string
  password?: string
}

export function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState<LoginErrors>({})
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
    setErrors((currentErrors) => ({
      ...currentErrors,
      email: undefined,
      form: undefined,
    }))
  }

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
    setErrors((currentErrors) => ({
      ...currentErrors,
      form: undefined,
      password: undefined,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors: LoginErrors = {}
    const trimmedEmail = email.trim()
    const trimmedPassword = password.trim()

    if (!trimmedEmail) {
      nextErrors.email = 'Email is required.'
    }

    if (!trimmedPassword) {
      nextErrors.password = 'Password is required.'
    }

    if (nextErrors.email || nextErrors.password) {
      setErrors(nextErrors)
      return
    }

    if (trimmedEmail !== demoEmail || trimmedPassword !== demoPassword) {
      setErrors({ form: 'Invalid demo credentials. Please try again.' })
      return
    }

    setErrors({})
    navigate('/dashboard')
  }

  return (
    <main className={loginPageClassName}>
      <Card className={loginCardClassName}>
        <div className={brandClassName}>
          <div className={brandIconClassName}>
            <HeartPulse size={24} aria-hidden="true" />
          </div>
          <h1 className={titleClassName}>ClinicFlow</h1>
          <p className={subtitleClassName}>
            Sign in to manage appointments, patients, and daily clinic operations.
          </p>
        </div>

        <form className={formClassName} onSubmit={handleSubmit}>
          {errors.form && <p className={formErrorClassName}>{errors.form}</p>}
          <Input
            error={errors.email}
            label="Email"
            type="email"
            placeholder="name@hospital.org"
            value={email}
            onChange={handleEmailChange}
          />
          <Input
            error={errors.password}
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />

          <div className={formOptionsClassName}>
            <label className={rememberLabelClassName}>
              <input
                checked={rememberMe}
                className={checkboxClassName}
                onChange={(event) => setRememberMe(event.target.checked)}
                type="checkbox"
              />
              Remember me
            </label>
          </div>

          <Button className="w-full" size="lg" type="submit">
            Sign In
          </Button>
        </form>

        <div className={demoBoxClassName}>
          <div className={demoHeaderClassName}>
            <ShieldCheck size={16} aria-hidden="true" />
            Demo credentials
          </div>
          <div className={demoTextClassName}>
            <p>
              Email: <span className={demoValueClassName}>{demoEmail}</span>
            </p>
            <p>
              Password: <span className={demoValueClassName}>{demoPassword}</span>
            </p>
          </div>
        </div>
      </Card>
    </main>
  )
}
