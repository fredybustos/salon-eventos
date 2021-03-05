import React from 'react';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube} from '@mdi/js';
import Icon from './Iconos';


export const Footer = () => {
  return (
    <div>
      <div className="container_footer">
        <div className="container_redes">
          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://facebook.com">
                 <Icon className='facebook'  size={'20px'} icon={ mdiFacebook } />
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://twitter.com">
                <Icon className='twitter'  size={'20px'} icon={ mdiTwitter } />
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://instagram.com">
               <Icon className='instagram'  size={'20px'} icon={ mdiInstagram } />
              </a>
            </div>
          </div>

          <div className="redes">
            <div className="container-icon">
              <a target='blanck' href="https://youtube.com">
               <Icon className='youtube'  size={'20px'} icon={ mdiYoutube } />
              </a>
            </div>
          </div>
        </div>

        <div className="container_soporte">
          <div className="soporte">
            <a href="">Sobre Nosotros</a>
            <a href="">Servicio Al Cliente</a>
            <a href="">Terminos y Condiciones</a>
          </div>
        </div>

      </div>
     
    </div>
  )
}
