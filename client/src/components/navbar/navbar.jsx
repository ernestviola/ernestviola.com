import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false)
    // select dom items
    const menuBtn = 
        document.querySelector(".menu-btn");
 
    const menu = 
        document.querySelector(".menu");
 
    const menuNav = 
        document.querySelector(".menu-nav");
 
    const menuBranding = 
        document.querySelector(".menu-branding");
 
    const navItems = 
        document.querySelectorAll(".nav-item");

 
    const toggleMenu = () => {
        if (!showMenu) {
            // menuBtn.classList.add("close");
            // menu.classList.add("show");
            // menuNav.classList.add("show");
            // menuBranding.classList.add("show");
            // navItems.forEach((item) =>
            //     item.classList.add("show"));
 
            // Reset the menu state
            setShowMenu(true)
        } else {
            // menuBtn.classList.remove("close");
            // menu.classList.remove("show");
            // menuNav.classList.remove("show");
            // menuBranding.classList.remove("show");
            // navItems.forEach((item) =>
            //     item.classList.remove("show"));
 
            // Reset the menu state
            setShowMenu(false)
        }
    }


  return (
    <div>
        <div className={`menu-btn ${showMenu ? 'close':''}  `} 
        onClick = {toggleMenu}>
            <div class="btn-line-1"></div>
            <div class="btn-line-2"></div>
            <div class="btn-line"></div>
        </div>
 
        <nav className={`menu ${showMenu ? 'show':''}`}>
            <div class="menu-branding">
                <div class="portrait">
                    <img src=
"https://media.geeksforgeeks.org/wp-content/uploads/20200326201748/download312.png"
                        alt="" />
                </div>
            </div>
 
            <ul class="menu-nav">
                <li class="nav-item current">
                    <a href="#" class="nav-link">
                        HOME</a>
                </li>
 
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        ABOUT ME</a>
                </li>
 
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        MY WORK</a>
                </li>
 
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        CONTACT ME</a>
                </li>
            </ul>
        </nav>

        {/* <div class="menu-btn">
            <div class="btn-line"></div>
            <div class="btn-line"></div>
            <div class="btn-line"></div>
        </div>

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
        </div> */}
    </div>
  )
}

export default Navbar