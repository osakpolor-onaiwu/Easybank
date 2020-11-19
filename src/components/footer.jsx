import React from 'react'
import logo from '../images/logo.svg'
import {NavLink} from 'react-router-dom'
import facebook from '../images/icon-facebook.svg'
import youtube from '../images/icon-youtube.svg'
import twitter from '../images/icon-twitter.svg'
import pinterest from '../images/icon-pinterest.svg'
import instagram from '../images/icon-instagram.svg'

export default function Footer() {
    return (
        <footer>
            <section id='footer'>
                <div id='A'>
                <img src={logo} alt="logo"/>
                <ul>
                    <li><img src={facebook} alt="facebook"/></li>
                    <li><img src={youtube} alt="youtube"/></li>
                    <li><img src={twitter} alt="twitter"/></li>
                    <li><img src={pinterest} alt="pinterest"/></li>
                    <li><img src={instagram} alt="instagram"/></li>
                </ul>
                </div>
                <div id='B'>
                    <ul>
                        <li className='first'><NavLink className='footlink' to='/'>About Us</NavLink></li>
                        <li><NavLink className='footlink' to='/'>Contact</NavLink></li>
                        <li><NavLink className='footlink' to='/'>Blog</NavLink></li>
                    </ul>
                </div>
                <div id='C'>
                    <ul>
                        <li className='first'><NavLink className='footlink' to='/'>Careers</NavLink></li>
                        <li><NavLink className='footlink' to='/'>Support</NavLink></li>
                        <li><NavLink className='footlink' to='/'>Privacy Policy</NavLink></li>
                    </ul>
                </div>
                <div id='D'>
                <button type='button'>
                        <NavLink className='footlink'  to="#"> 
                        Request Invite
                        </NavLink>
                        </button>
                    <p> © Easybank. All Rights Reserved</p>
                </div>
            </section>
            <div className="attribution">
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Challenge by Frontend Mentor</a>
            <a href="#">Coded by Osakpolor Onaiwu</a>
            </div>
        </footer>
    )
}
