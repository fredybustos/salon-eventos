import React from 'react';
import logoCumpleaños from '../assets/static/cumpleaños.jpg';
import logoDespedida from '../assets/static/despedida.jpg';
import logoMatrimonio from '../assets/static/matrimonio.jpg';
import logoInfantil from '../assets/static/infantil.jpg';


export const Eventos = () => {
  return (
    <div>
        <div className="container_title">
          <h1>Eventos que realizamos</h1>
        </div>
      <div className="container_eventos">

        <div className="eventos">
          <div className="eventos_card">

            <div className="card">
              <figure className='card_container-img'>
                <img src={logoCumpleaños}  alt=''/>
              </figure>

              <div className="card_container-data">
                <h2>Cumpleaños</h2>
                <p>Celebramos tu cumpleaños como nunca antes lo habian hecho,
                  tu solo vienes nosotros nos encargamos de resto.
                </p>
              </div>
            </div>

            <div className="card">
              <figure className='card_container-img'>
                <img src={ logoDespedida }  alt=''/>
              </figure>

              <div className="card_container-data">
                <h2>Despedidas </h2>
                <p>Si llego el final de un ciclo y no sabes como sorprender tu personal,
                  tranquilo casa BC se encargar de hacerte el mejor jefe del mundo.</p>
              </div>
            </div>

            <div className="card">
              <figure className='card_container-img'>
                <img src={ logoMatrimonio }  alt=''/>
              </figure>

              <div className="card_container-data">
                <h2>Matrimonios</h2>
                <p>
                  Estas dando un gran paso en tu vida, por eso casa BC 
                  te ayuda a hacer de este dia uno muy especial que quedara
                  marcado en sus vidas.
                </p>
              </div>
            </div>

            <div className="card">
              <figure className='card_container-img'>
                <img src={ logoInfantil }  alt=''/>
              </figure>

              <div className="card_container-data">
                <h2>Fiestas Infantiles</h2>
                <p>Para los pequeñines tambien tenemos su propio evento,
                  que no solo disfrutemos los adultos ellos tambien merecen 
                  lo mejor
                </p>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </div>
  )
}
