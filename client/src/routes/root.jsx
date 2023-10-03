import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Home from './home'
import Projects from './projects'

import './navbar.css'
import './footer.css'

const Root = () => {
  return (
    <>
        <div className='navbar'>
            <div class="logo">
                <i class="fas fa-feather-alt"></i>
            </div>
            <nav className='site-nav'>
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/projects'}>Projects</Link>
                </ul>
            </nav>
        </div>
        
        <div>
            <Outlet />
        </div>  
        <footer>
            <div>
                Site Map
                <ul>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/projects'}>Projects</Link>
                </ul>
            </div>
            <div className='footer-bottom'>
                <div>
                    Copyright © {new Date().getFullYear()} Ernest Viola 
                </div>
                <div>
                    Contact
                    <ul className='footer-contact'>
                        <Link to='https://github.com/ernestviola' target='_blank'><i class="fa-brands fa-github"></i></Link>
                        <Link to='https://www.linkedin.com/in/ernestviola' target='_blank'><i class="fa-brands fa-linkedin"></i></Link>
                    </ul>
                    
                </div>
            </div>

        </footer>
    </>
  )
}

export default Root