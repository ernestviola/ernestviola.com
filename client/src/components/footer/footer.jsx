import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
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
                    <Link to='https://github.com/ernestviola' target='_blank'><i class="fa-brands fa-github"></i></Link>
                    <Link to='https://www.linkedin.com/in/ernestviola' target='_blank'><i class="fa-brands fa-linkedin"></i></Link>
                </div>
            </div>

        </footer>
    )
}

export default Footer