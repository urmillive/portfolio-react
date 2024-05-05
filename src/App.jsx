import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
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
