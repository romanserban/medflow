import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../components/AppShell'
import { AppointmentsPage } from '../pages/AppointmentsPage'
import { DashboardPage } from '../pages/DashboardPage'
import { LoginPage } from '../pages/LoginPage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { PatientsPage } from '../pages/PatientsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <AppShell />,
    children: [
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'appointments', element: <AppointmentsPage /> },
      { path: 'patients', element: <PatientsPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])
