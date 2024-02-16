import { useState, useEffect } from "react";
import Imagen from './Assets/miyesy1.png';
import Imagen2 from './Assets/miyesy2.png';
import Imagen3 from './Assets/miyesy3.png';
import Imagen4 from './Assets/miyesy4.png';

const PruebasHooks = ( {contador, setContador} ) => {

    let arr = [
     Imagen,
     Imagen2,
     Imagen3,
     Imagen4
   ]

    
   const [img, setImg] = useState("");

  useEffect(() => {
    setImg(arr[contador + 0]); 
  }, [contador]);

  return (
    <div className="FondoSlider">
        <h1 className="Titulo3">Mis trabajos</h1>

            <h2 className="TituloSlider">Página Miyesy</h2>
        <div className="ContVentanaSlider">

        <section className='Contenedor4'>


                <p className='Parrafo1'>
                    Esta página web fue elaborada como un trabajo final para el segundo trimestre de la tecnología que curso. La temática de las página era un diseño web para una empresa desarrolladora de software llamada miyesy. Para la página se usaron librerías de bootstrap, animaciones, validaciones de formulario y modelo responsivo
                </p>
        </section>

        <div className="ContenedorSlider">

        <img className="ImagenSlider" src={img} alt="" />

        <button className="BtnIzquierda" onClick={() => {
                      if (contador > 0) {
                        setContador(contador - 1);}}}>
          ← 
        </button>
        
        <button className="BtnDerecha" onClick={() => {
               if (contador < arr.length-1) {
               setContador(contador + 1);}}}>
            →
          </button>
        </div>
        </div>
        </div>

   
  )
}

export default PruebasHooks
