import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { BlackbeardPage, PiratePage, SearchPage, StrawHatPage } from '../components'

export const PiratesRoutes = () => {
  return (
    <>
        <Navbar/>

        <div className='container'>
            <Routes>
                <Route path="strawhat" element={<StrawHatPage />} />
                <Route path="blackbeard" element={<BlackbeardPage />} />

                <Route path="search" element={<SearchPage />} />
                <Route path="pirate/:id" element={<PiratePage />} />

                <Route path="/" element={<Navigate to="/strawhat" />} />
            </Routes>
        </div>

    </>
  )
}
