import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";


import { PiratesApp } from './PiratesApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>

      <PiratesApp />
      
    </BrowserRouter>

  </React.StrictMode>
)
