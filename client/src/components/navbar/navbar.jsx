import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        if (!showMenu) {
            setShowMenu(true)
        } else {
            setShowMenu(false)
        }
    }


    return (
        <div>
            <div className='branding'>
                <h2>Ernest.</h2>
            </div>


            <nav>
                <button className={`menu-btn ${showMenu ? 'close' : ''}  `}
                    onClick={toggleMenu}>
                    <div class="btn-line-1"></div>
                    <div class="btn-line-2"></div>
                    {/* <div class="btn-line-3"></div> */}
                </button>

                <div className={`menu ${showMenu ? 'show' : ''}`}>
                    <ul className={`menu-nav ${showMenu ? 'show' : ''}`}>
                        <li className={`nav-item ${showMenu ? 'show' : ''}`}>
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        <li className={`nav-item ${showMenu ? 'show' : ''}`}>
                            <Link to='/projects' className='nav-link'>Projects</Link>
                        </li>
                        <li className={`nav-item ${showMenu ? 'show' : ''}`}>
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>


                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar