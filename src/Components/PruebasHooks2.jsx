import { useState, useEffect } from "react";
import IMG1 from './Assets/coso1.png';
import IMG2 from './Assets/coso2.png';
import IMG3 from './Assets/coso3.png';
import IMG4 from './Assets/coso4.png';
import IMG5 from './Assets/coso5.png';
import IMG6 from './Assets/coso6.png';
import IMG7 from './Assets/coso7.png';

const PruebasHooks2 = ( {contador, setContador} ) => {

    let arr = [
     IMG1,
     IMG2,
     IMG3,
     IMG4,
     IMG5,
     IMG6,
     IMG7
   ]

    
   const [img, setImg] = useState("");

  useEffect(() => {
    console.log("Contador cambió a:", contador);
    console.log("Imagen actual:", arr[contador]);
    setImg(arr[contador + 0]); 
  }, [contador]);

  return (
    <div className="FondoSlider">

    <h2 className="TituloSlider">Aplicación C#</h2>


        <div className="ContVentanaSlider">

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
        <section className='Contenedor4'>

            

                <p className='Parrafo1'>
                    Ésta aplicación se hizo en Visual studio usando el lenguaje C#, siendo pensada como una aplicación para recopilar datos de los empleados de una empresa. Cuenta con capa visual, lógica, parámetros y conexión.
                </p>
        </section>
        
        </div>
        </div>

   
  )
}

export default PruebasHooks2
