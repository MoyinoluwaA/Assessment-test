import React from 'react'
import {NavLink} from 'react-router-dom'

const Nav = ({className}) => {
    return(
        <nav>
            <span className='brand-logo'>
                Food<span className='red'>Bag</span>
            </span>
            <ul>
                <li><NavLink to='/cart' className={className}>Cart</NavLink></li>
                <li>Login</li>
                <li className='register'>Sign up</li>
            </ul>
        </nav>
    )
}

export default Nav