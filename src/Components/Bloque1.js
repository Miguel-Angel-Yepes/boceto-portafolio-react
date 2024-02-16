import React from 'react'
import Imagen1 from './Assets/Imagen1.png'

const Bloque1 = () => {
  return (

    <section className='Bloque1'> 
    <div className='Contenedor1'>
      <div className='Titulos'>
       <h1 className='Titulo1'>Miguel Ángel Yepes</h1>
       <h2 className='Subtitulo1'>Desarrollador de software</h2>
      </div>
    </div>
    
    <div className='Contenedor2'>
       <img src={Imagen1} className='imagen1'></img>
    </div>
      
    </section>
  )
}

export default Bloque1
 