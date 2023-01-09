import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div className='logo'>
        <img src={require('./Logo.svg').default} alt=""/>
            <div>
                <ul className='footerlinks'>
                    <li>
                    <Link to='./' className='link'>Home</Link>
                    </li>
                    <li>
                    <Link to='./About'className='link'>About</Link>
                    </li>
                    <li>
                    <Link to='./Menu'className='link'>Menu</Link>
                    </li>
                    <li>
                    <Link to='./Reservations'className='link'>Reservations</Link>
                    </li>
                    <li>
                    <Link to='./Order'className='link'>Order online</Link>
                    </li>
                    <li>
                    <Link to='./Login'className='link'>Login</Link>
                    </li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>Lagos, Nigeria</li>
                    <li>08023361040</li>
                    <li>lemon@gmail.com</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
    </div>
  )
}

export default Footer