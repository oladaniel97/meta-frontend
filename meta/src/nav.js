import React from 'react';
import {Link} from 'react-router-dom';


function Nav() {
  return (
    <div>
        <div className='navbar'>
            <img src={require('./Logo.svg').default} alt=""/>
                <ul className='navlinks'>
                    <li>
                        <Link to='./'className='link'>Home</Link>
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
    </div>
  )
}

export default Nav