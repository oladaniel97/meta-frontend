import React from 'react';
import { Link } from 'react-router-dom';
import Food from './restauranfood.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className='inner'>
            <div className='left'>
                <h1 className='lemon'>
                    LITTLE LEMON
                </h1>
                <p className='p'>
                    Chicago
                </p>
                <p>
                    lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet lorem ips lorem ipsum dolor sit amet lorem ips lorem ips lorem ips
                </p>
                <button ><Link to='./bookingpage' className='link'>Resrve a Table</Link></button>

            </div>
            <div className='food'>
            <img src={Food} alt=''/>
            </div>
        </div>
            
    </div>
  )
}

export default Hero