import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logos/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/icons/icono-perfil.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logo} alt='Paltzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={userIcon} alt='Perfil' />
        <p>Perfil</p>
      </div>
      <ul>
        <li><a href='/'>Cuenta</a></li>
        <li><a href='/'>Cerrar Sesión</a></li>
      </ul>
    </div>
  </header>
);

export default Header;
