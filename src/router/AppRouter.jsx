import { Route, Routes } from 'react-router-dom'

import { PiratesRoutes } from '../pirates'
import { LoginPage } from '../auth'


export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<PiratesRoutes />} />

    </Routes>
    </>
  )
}
