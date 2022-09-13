import { Route, Routes } from 'react-router-dom'

import { PiratesRoutes } from '../pirates/routes/PiratesRoutes'
import { LoginPage } from '../auth/pages/LoginPage'




export const AppRouter = () => {
  return (
    <>

        <Routes>
            
            <Route path="login" element={<LoginPage />} />
            <Route path="/*" element={ <PiratesRoutes />} />
        </Routes>
    
    </>


  )
}
