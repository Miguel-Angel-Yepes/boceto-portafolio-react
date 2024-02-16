import React from 'react'
import Imagen2 from './Assets/imagen2.jpg'

const Bloque2 = () => {
    return (

        <section>
            <h1 className='Titulo3'>
                Acerca de mi
            </h1>

            <section className='SobreMi'>

                <section className='Contenedor3'>
                    <div>
                        <p className='Parrafo1'>
                        Me considero como una persona capaz de dar una respuesta puntual y eficiente a mis labores, siempre buscando que mis labores se lleven a cabo de modo prolijo y de la mejor manera posible. Soy una persona que fomenta el trabajo colaborativo, siempre con disposición acomunicarme con mis colegas ysuperiores
                        </p>
                    </div>
                </section>

                <section className='Contenedor4'>
                    <img src={Imagen2} className='Imagen2'></img>
                </section>

            </section>

        </section>

)}


export default Bloque2 