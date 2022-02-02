import React from 'react'
import {Link} from 'react-router-dom'
import '../css/navbar.css'
import '../App.js'

export const Navbar = () => {
    return(
        
    <div id="Navbar">  
        <div class='nav-title'>Stryngs</div>
            <div class='nav-link-container'>
                <Link class='nav-link' to='/'>Home</Link>
                <Link class='nav-link' to='/about'>About</Link>
                <Link class='nav-link' to='/contact'>Contact</Link>
            </div>
    </div>
     

    )
}