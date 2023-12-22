import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Router/AuthProvider'
import myRouter from './Router/Router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
    <RouterProvider router={myRouter} />
  </AuthProvider>
</React.StrictMode>,
)
