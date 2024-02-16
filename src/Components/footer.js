import React from 'react'
import Articulo from './Assets/articulo.png';
import Wpp from './Assets/Wpp.png';
import Ig from './Assets/Ig.png';
import Gmail from './Assets/Gmail.png';

function Footer() {
  return (
    <section className='CajaFooter'>

        <h2 className='TituloFooter'>Contacto</h2>
        <h2 className='LineaFooter'>_______________</h2>

        <section className='CajaFlex'>

            <section class="FlexFooter">
                <a class="href" href="mailto:miguelang405@gmail.com" target="_blank"><img src={Gmail} className='SubIcono'></img></a>
                <p class="ParrafoSubIcono">miguelang405@gmail.com</p>
            </section>

            <section class="FlexFooter">
                <a  class="href" href="https://wa.me/3193099340" target="_blank"><img src={Wpp}   class="SubIcono"></img></a>
                <p class="ParrafoSubIcono">3193099340</p>
            </section>
    
            <section class="FlexFooter">
                <a class="href" href="https://www.instagram.com/miguel_yepes___/" target="_blank"><img src={Ig}   class="SubIcono"></img></a>
                <p class="ParrafoSubIcono">miguel_yepes___</p>
            </section>        
        </section>

            <p class="ParrafoSubIcono2" >© {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
            </p>

    </section>
  )
}

export default Footer
