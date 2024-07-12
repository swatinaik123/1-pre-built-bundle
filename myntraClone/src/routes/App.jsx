import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import "bootstrap/dist/css/min.css"
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeItem from '../components/HomeItem'
import { Outlet } from 'react-router-dom'
import FetchItems from '../components/FetchItems'

function App() {
 

  return (
    <>
      <Header/> 
      {/* <FetchItems/> */}
      <Outlet/>
      <Footer/>
    
    </>
  )
}

export default App
