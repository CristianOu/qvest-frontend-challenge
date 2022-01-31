import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.svg';
import './_header.scss';

function Header() {
  return (
    <div className='header'>     
      <Link to='/'>
        <img src={Logo} alt='Logo' className='logo'/>
      </Link>    
      <div className='page-title'>Workplace culture in CRAFT</div>
      {/* I am not sure what this number should depend on */}
      <div className='opens-in'>Opens in 2 days</div>
    </div>
  );
}

export default Header;
