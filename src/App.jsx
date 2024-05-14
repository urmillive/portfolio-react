import './App.css'
import { Outlet } from 'react-router-dom'
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Provider } from 'react-redux'
import { store } from "./store/store"

function App() {
  return (
    <>
      <Provider store={ store }>
        <div className='container-fluid body_section vsc-initialized'>
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </Provider>
    </>
  )
}

export default App
