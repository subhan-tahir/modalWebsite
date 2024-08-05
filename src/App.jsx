import React from 'react'
import Navbar1 from './Navbar1'
import Hero from './Hero'
import Form from './Form'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
    
    <Navbar1 />
    <Hero />
    <Form />
    <ToastContainer />
    </>
  )
}

export default App
