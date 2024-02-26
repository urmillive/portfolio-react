import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import About from './components/about/About.jsx'
import Education from "./components/education/Education.jsx"
import Skills from "./components/skills/Skills.jsx"
import Contact from "./components/contact/Contact.jsx"
import Projects from "./components/projects/Projects.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <About />
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
