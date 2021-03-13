import React, { useState } from 'react';
import { mdiArrowDownBox, mdiMicrosoftXboxControllerMenu } from '@mdi/js';
import Icon from './Iconos';
import img_principal from '../assets/static/sinbackground/ponque1.png';
import arreglo_principal from '../assets/static/sinbackground/areglo2.png';
import globos from '../assets/static/sinbackground/globos1.png';




export const Header = () => {
  const [burguerActive, setBurguerActive] = useState(false);
  const [scroll, setScroll] = useState(0);

  const handleClick= () => {
    window.scroll({
      top: 660,
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
        <nav className= ''>
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
        <div className="component_info">
          <div className="container_info">
            <h1>SALON DE EVENTOS <br />CASA BC </h1>
            <p  >Todos  disfrutaran  de una <br/>  experiencia inolvidable, te <b/>
            sentiras  <br/> en familia.
            </p>
            <img className='globos' src={ globos } alt='imagen_principal'/>
            <Icon color={'#ce4257'} size={'50px'} onClick={handleClick} className='bajar' icon={ mdiArrowDownBox } />
          </div>

          <figure className='container_img-principal'>
            <img className='img_principal-arreglo' src={ arreglo_principal } alt='arreglo_principal'/>
            <img className='img_principal-ponque' src={ img_principal } alt='imagen_principal'/>
           {/*  <img className='img_principal-arreglo2' src={ arreglo_principal2 } alt='imagen_principal'/> */}
          </figure>
        </div>
      </header>
    </div>
  )
}
