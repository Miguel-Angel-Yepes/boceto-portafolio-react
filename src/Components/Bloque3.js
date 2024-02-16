import React, {useState} from 'react';
import Habilidad from './Assets/habilidad.png';
import Articulo from './Assets/articulo.png';
import Aspiraciones from './Assets/expectativa.png';
import Aspiraciones2 from './Assets/Aspiraciones.png';
import Button from '@mui/material/Button';
import Articulo2 from './Assets/articulo2.png';
import Habilidad2 from './Assets/habilidad2.png';


function Bloque3() {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const [modalImage, setModalImage] = useState(null); 
  
    const abrirModal = (content, image) => {
      setShowModal(true);
      setModalContent(content);
      setModalImage(image);
    };
  
    const cerrarModal = () => {
      setShowModal(false);
    };
    
  return (
    <section className='Bloque2'>
    <section class="ContenedorIcon" >
    <img src={Habilidad} className='Icono'></img>
    <h3 class="Titulo2">
        Habilidades
    </h3>

    <Button variant="contained" style={{backgroundColor: 'rgba(209, 28, 28)'}}onClick={() =>
            abrirModal(
                'Poseo habilidades en las áreas de redacción, capacidad comunicativa, desarrollo de algoritmos, gestión de base de datos, desarrollo de interfaz para páginas web y conexión de base de datos a aplicaciones',
                Habilidad2
                )
                }>Ver más
                </Button>
    </section>

<section class="ContenedorIcon">
    <img src={Articulo} className='Icono'></img>
    <h3 class="Titulo2">
        Publicaciones
    </h3>

    <Button variant="contained" style={{backgroundColor: 'rgba(209, 28, 28)'}} onClick={() =>
            abrirModal(
                'Cuento con la publicación de parte de la revista construcción y sostenibilidad del artículo Optimización de la eficiencia estructural defiltros de agua por medio del diseño yconstrucción de un prototipo en canal hiperbólico.',
                Articulo2
                )
            }>Ver más</Button>
</section>

<section class="ContenedorIcon">
    <img src={Aspiraciones} className='Icono'></img>
    <h3 class="Titulo2">
        Aspiraciones
    </h3>

    <Button variant="contained" style={{backgroundColor: 'rgba(209, 28, 28)'}}onClick={() =>
            abrirModal(
                'Aspiro siempre ser mejor cada día, para llegar a ser el dia de mañana una mejor versión de lo que soy yo, mejorando y aprendiendo siempre como ser mejor en lo que hago. También aspiro a ser un desarrollador que aporte a la sociedad y a la comunidad, asi mismo desempeñando un cargo laboral bien pago y estable.',
                Aspiraciones2
                )
                }>Ver más
                </Button>
    
</section>

    {showModal && (
        <div className='fondoModal'>
          <div className='modal'>
            {modalImage && <img src={modalImage} alt='Imagen del plazo' />}
            <p>{modalContent}</p>
            <button className='verMas' onClick={cerrarModal}>
              Cerrar
            </button>
          </div>
        </div>
      )}
            </section>
  )
}






export default Bloque3 