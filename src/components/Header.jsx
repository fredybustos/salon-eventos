import React from 'react';
import { mdiArrowDownBox } from '@mdi/js';
import Icon from './Iconos';
export const Header = () => {
  const handleClick= () => {
    window.scroll({
      top: 700,
      left: 100,
      behavior: 'smooth'
    });
  }
  return (
    <div>
      <header className='header'>
        <div className="container_info">
          <h1>SALON DE EVENTOS <br />CASA BC </h1>
          <p>Todos disfrutaran  de una <br/>  experiencia inolvidable, te <b/>
          sentiras  <br/> en familia.
          </p>
          <Icon color={'#444'} size={'50px'} onClick={handleClick} className='bajar' icon={ mdiArrowDownBox } />
            
        </div>
      </header>
    </div>
  )
}
