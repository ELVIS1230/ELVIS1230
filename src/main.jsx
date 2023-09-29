import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { TickTack } from './pages/TickTack/pages.jsx'
import { Home } from './pages/index.jsx'
import { Pointer } from './pages/Pointer/page.jsx'
import { TestReact } from './pages/TestReact/pages.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/tick_tack',
    element: <TickTack/>
  },
  {
    path: '/pointer',
    element: <Pointer/>
  },
  {
    path: '/testReact',
    element: <TestReact/>
  },
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
