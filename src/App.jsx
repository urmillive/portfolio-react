import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header"
import Main from "./components/About"
import Footer from "./components/Footer"

function App() {
  const [ count, setCount ] = useState(0)

  return (
    <>
      <div className='container-fluid body_section vsc-initialized'>
      <Header></Header>
      <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
