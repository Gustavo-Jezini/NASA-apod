import React from 'react';
import './Header.css'; 

const Header = () => {
  return (
    <nav className='nav-header'>
      <ul className='ul-header'>
        {/* Esse elemento vazio está para ajudar no CSS. */}
        <li style={{opacity: '0'}} className='li-header'></li>
        <li id='li-explore' className='li-header'>Explore</li>
        <li id='li-aboutme' className='li-header'>About Me</li>
      </ul>
    </nav>
  )
}

export default Header;
