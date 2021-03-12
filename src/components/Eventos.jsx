import React from 'react';
import logoimg1 from '../assets/static/imagen2.jpg';
import logoimg2 from '../assets/static/imagen3.jpg';
import logoimg3 from '../assets/static/imagen5.jpeg';
import logoimg4 from '../assets/static/imagen6.jpg';
import logoimg5 from '../assets/static/imagen7.jpg';
import logoimg6 from '../assets/static/imagen8.jpeg';
import logoimg7 from '../assets/static/imagen12.jpg';
import logoimg8 from '../assets/static/imagen13.jpg';
import logoimg9 from '../assets/static/imagen16.jpg';
import logoimg10 from '../assets/static/imagen27.jpg';
import logoimg11 from '../assets/static/imagen24.jpg';
import logoimg12 from '../assets/static/imagen25.jpg';


export const Eventos = () => {
  return (
    <div>
      <div className="container_eventos">
        <div className="container_title">
          <h1>Eventos que realizamos</h1>
        </div>

        <div className="container_banners">
          <div>
            <figure>
              <img src={logoimg1} alt=""/>
            </figure>

            <figure>
              <img src={logoimg2} alt=""/>
            </figure>

            <figure>
              <img src={logoimg3} alt=""/>
            </figure>

            <figure>
              <img src={logoimg4} alt=""/>
            </figure>
          </div>

          <div>
            <figure>
              <img src={logoimg5} alt=""/>
            </figure>

            <figure>
              <img src={logoimg6} alt=""/>
            </figure>

            <figure>
              <img src={logoimg7} alt=""/>
            </figure>

            <figure>
              <img src={logoimg8} alt=""/>
            </figure>
          </div>

          <div>
            <figure>
              <img src={logoimg9} alt=""/>
            </figure>

            <figure>
              <img src={logoimg10} alt=""/>
            </figure>

            <figure>
              <img src={logoimg11} alt=""/>
            </figure>

            <figure>
              <img src={logoimg12} alt=""/>
            </figure>
          </div>
        </div>
        
      </div>
    </div>
  )
}
