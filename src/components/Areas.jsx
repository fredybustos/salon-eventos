import React, { useState } from 'react';
import logosalon from '../assets/static/salonprincipal.jpg';
import logoCapilla from '../assets/static/capilla.jpg';
import logoCampestre from '../assets/static/campestre.jpg';
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

        <div className={active1 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img src={logosalon}  alt=''/>
          </div>
          <Icon color={'#444'} onClick={handleClick} className='span' icon={ active1 ? mdiArrowUpDropCircle : mdiArrowDownDropCircle} />
            

          <div className={ active1 ? 'areas_info alargar': 'areas_info'}>
            <h2>Salon principal</h2>
            <p>Contamos con un salon adaptado para albergar hasta
              500 personas, el cual cuenta con tarima, pista de baile y un balcon
              donde se instalaran musicos o Dj si se desea contar con alguno de ellos.
            </p>
          </div>
        </div>

        <div className={ active2 ? 'areas cambiar': 'areas'}>
          <div className={active2 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img src={logoCapilla}  alt=''/>
          </div>
          
          <Icon color={'#444'} onClick={handleClick2} className='span' icon={active2 ? mdiArrowUpDropCircle : mdiArrowDownDropCircle} />
          

          <div className={ active2 ? 'areas_info alargar': 'areas_info'}>
            <h2>Capilla</h2>
            <p>Contamos con una capilla acoplada para celebrar cualquier tipo de 
              evento religioso, ya sea tu matrimonio, el bautizo de tu hijo primeras 
              comuniones etc.. .
            </p>
          </div>

        </div>

        <div className={ active3 ? 'areas cambiar': 'areas'}>
          <div className={active3 ? 'areas_img cambiar_responsive': 'areas_img'}>
            <img src={logoCampestre}  alt=''/>
          </div>

          <Icon color={'#444'} onClick={handleClick3} className='span' icon={active3 ? mdiArrowUpDropCircle : mdiArrowDownDropCircle} />
          

          <div className={ active3 ? 'areas_info alargar': 'areas_info'}>
            <h2>Zona campestre</h2>
            <p>
              Nuestra zona campestre es una de las areas mas grandes para que tu la puedas
              ocupar durante tu evento si asi lo deseas, lo ideal es que tengas una 
              experiencia inolvidable.
            </p>
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
