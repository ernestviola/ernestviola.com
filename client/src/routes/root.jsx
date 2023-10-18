import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Home from './home'
import Projects from './projects'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'


const Root = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default Root