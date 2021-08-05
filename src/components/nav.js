import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'

const Nav = ({className}) => {
    const [hide, setHide] = useState(true)

    const toggleNav = () => {
        setHide(!hide)
    }

    return(
        <nav>
            <div className='nav-sm'>
                <span className='brand-logo'>
                    Food<span className='red'>Bag</span>
                </span>
                <i className='fa fa-bars' onClick={() => toggleNav()} />
            </div>
            <ul className={hide ? 'hide' : 'line'}>
                <li><NavLink to='/cart' className={className}>Cart</NavLink></li>
                <li>Login</li>
                <li className='register'>Sign up</li>
            </ul>
        </nav>
    )
}

export default Nav