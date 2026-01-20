import React, { use } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
// import side

const App = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      <ToastContainer />
    </>
  )
}

export default App
