import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Home from './home'
import Projects from './projects'

import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

import './root.css'


const Root = () => {
  return (
    <>
        <Navbar />
        <div className='content'>
          <Outlet /> 
        </div>
        <Footer />
    </>
  )
}

export default Root