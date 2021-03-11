import React, { useState } from 'react';
import { mdiArrowDownBox, mdiMicrosoftXboxControllerMenu } from '@mdi/js';
import Icon from './Iconos';
export const Header = () => {
  const [burguerActive, setBurguerActive] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleClick= () => {
    window.scroll({
      top: 700,
      left: 100,
      behavior: 'smooth'
    });
  }
  window.onscroll = function() {
    setScroll(window.scrollY);
  };
  
  const clickBurguer = () => {
    setBurguerActive(!burguerActive);
  }
  return (
    <div>
      <header className='header'>
        <nav className={ scroll > 666 ? 'cambio_nav' : ''}>
        <div className="container_burguer">
          <Icon onClick={ clickBurguer} className='burguer' color={'#fff'} size={'40px'} icon={mdiMicrosoftXboxControllerMenu} />
        </div>
          <ul className={ burguerActive ? 'aparicion_nav': ''} >
           <a href="">Inicio</a>
            <a href="">Agenda</a>
            <a href="">Envianos un Correo</a>
            <a href="#redes_sociales">Siguenos en Redes</a>
          </ul>
        </nav>
        <div className="container_info">
          <h1>SALON DE EVENTOS <br />CASA BC </h1>
          <p  >Todos disfrutaran  de una <br/>  experiencia inolvidable, te <b/>
          sentiras  <br/> en familia.
          </p>
          <Icon color={'#444'} size={'50px'} onClick={handleClick} className='bajar' icon={ mdiArrowDownBox } />
            
        </div>
      </header>
    </div>
  )
}
