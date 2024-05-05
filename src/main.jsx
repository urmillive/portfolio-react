import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import About from './components/About/About.jsx'
import Timeline from "./components/Timeline/Timeline.jsx"
import Skills from "./components/Skills/Skills.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Projects from "./components/Projects/Projects.jsx"
import ProjectDetail from "./components/Projects/ProjectDetail.jsx"
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Education from './components/Education/Education.jsx'

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
        path: 'experience',
        element: <Timeline />
      },
      {
        path: 'skills',
        element: <Skills />
      },
      {
        path: 'projects',
        children: [ {
          path: "",
          element: <Projects />,
        },
        {
          path: ':id',
          element: <ProjectDetail />
        }
        ]
      },
      {
        path: 'education',
        element: <Education />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={ router } />)
