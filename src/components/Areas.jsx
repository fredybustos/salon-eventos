import React, { useState } from 'react';
import logoCasa from '../assets/static/imagen18.jpg';
import logoHome from '../assets/static/imagen19.jpg';
import logoCook from '../assets/static/imagen26.jpg';
import logoCap from '../assets/static/imagen29.jpeg';
import logoParty from '../assets/static/imagen1.jpg';
import logoPar from '../assets/static/imagen17.jpg';

import Icon from './Iconos';
import { mdiArrowDownDropCircle, mdiArrowUpDropCircle,  mdiWhatsapp } from '@mdi/js';

export const Areas = () => {
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false)
  const handleClick = () => {
    setActive1( !active1)
    setActive2(false);
    setActive3(false)
  }
  const handleClick2 = () => {
    setActive2( !active2)
    setActive1(false);
    setActive3(false);
  }

  const handleClick3 = () => {
    setActive3( !active3)
    setActive1(false);
    setActive2(false);
  }
  return (
    <div>
      <div className="title_section">
        <h1>Areas que puedes Disfrutar</h1>
      </div>
      <section className='container_areas'>
        <div className={ active1 ? 'areas cambiar': 'areas'}>

          <div className={ active1 ? 'areas_info alargar': 'areas_info'}>
            <h2>Salon principal</h2>
            <p>Contamos con un salon adaptado para albergar hasta
              500 personas, el cual cuenta con tarima, pista de baile y un balcon
              donde se instalaran musicos o Dj si se desea contar con alguno de ellos.
            </p>
          </div>

          <div className='areas_img' >
            <img className='img-house' src={logoCasa}  alt=''/>
            <img className='img-home' src={logoHome}  alt=''/>
          </div>
        </div>

        <div className={ active2 ? 'areas cambiar': 'areas'}>
          <div className={active2 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img className='img-cook' src={logoCook}  alt=''/>
            <img className='img-cap' src={logoCap}  alt=''/>
          </div>

          <div className={ active2 ? 'areas_info alargar': 'areas_info'}>
            <h2>Capilla</h2>
            <p>Contamos con una capilla acoplada para celebrar cualquier tipo de 
              evento religioso, ya sea tu matrimonio, el bautizo de tu hijo primeras 
              comuniones etc.. .
            </p>
          </div>
          
        </div>

        <div className={ active3 ? 'areas cambiar': 'areas'}>

          <div className={ active3 ? 'areas_info alargar': 'areas_info'}>
            <h2>Zona campestre</h2>
            <p>
              Nuestra zona campestre es una de las areas mas grandes para que tu la puedas
              ocupar durante tu evento si asi lo deseas, lo ideal es que tengas una 
              experiencia inolvidable.
            </p>
          </div>

          <div className={active3 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img className='img-party' src={logoParty}  alt=''/>
            <img className='img-par' src={logoPar}  alt=''/>
          </div>
        </div>
        
        <div className="container_icon-whatsaap">
          <a target='blanck' href="https://api.whatsapp.com/send?phone=34123456789">
            <Icon size={'50px'} color={'#00bb2d'} icon={ mdiWhatsapp } className='whatsaap' />
          </a>
        </div>
      </section>
      
    </div>
    
  )
}
