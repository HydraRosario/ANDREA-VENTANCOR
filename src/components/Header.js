import React from 'react';
//images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='# '>
            <img src={Logo} alt='' height='200px' width='200px'/>
          </a>
          {/* button */}
          <a href='https://www.facebook.com/andreaventancorturismo' target='_blank' rel='noopener noreferrer'><button className='btn btn-lg'>Trabaja conmigo</button></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
