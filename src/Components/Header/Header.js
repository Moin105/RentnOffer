import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../Images/logo.png'
import './Styles.css'
function Header({ color }) {
    return (
        <>
            <div className='wrapper'>
                <div className='header'>
                    <div className='header-box'>
                        <div className='logo'>
                            <img src={logo} />
                        </div>
                        <div className='ham' styles={{ color: color }}><GiHamburgerMenu /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header